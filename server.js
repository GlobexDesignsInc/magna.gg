/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
/* eslint-disable flowtype/require-return-type, flowtype/require-parameter-type */

const compression = require('compression');
const greenlock = require('greenlock-express');
const http = require('http');
const http2 = require('http2');
const Koa = require('koa');
const koaConnect = require('koa-connect');
const koaSend = require('koa-send');
const next = require('next');
const redirectHttps = require('redirect-https');
const Router = require('koa-router');

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;
const PORT = parseInt(process.env.PORT, 10) || 3000;
const __DEV__ = process.env.NODE_ENV !== 'production';

const app = next({dev: __DEV__});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	// Enable gzip compression
	server.use(koaConnect(compression()));

	router.get('/robots.txt', (ctx) => koaSend(ctx, ctx.path, {
		maxAge: ONE_YEAR,
	}));

	router.get('*', async (ctx) => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());

	// Dev server doesn't use any of the greenlock and HTTP2 stuff, so we can
	// immediately serve the application.
	if (__DEV__) {
		return server.listen(PORT, (err) => {
			if (err) throw err;
			// eslint-disable-next-line no-console
			console.log(`> Ready on http://localhost:${PORT}`);
		});
	}

	// Enable greenlock SSL
	const gLock = greenlock.create({
		approveDomains (opts, certs, cb) {
			opts.domains = certs && certs.altnames || opts.domains;
			opts.email = 'info@globexdesigns.com';
			opts.agreeTos = true;

			cb(null, {
				certs,
				options: opts,
			});
		},
		configDir: '/tmp/etc/greenlock',
		server: 'https://acme-v02.api.letsencrypt.org/directory',
		store: require('greenlock-store-fs'),
		version: 'draft-11',
	});

	// Handle HTTPS connections with HTTP/2
	const http2Server = http2.createSecureServer(gLock.tlsOptions, server.callback());

	// Handle HTTP connnections
	const acmeChallengeHandler = gLock.middleware(redirectHttps());
	http.createServer(acmeChallengeHandler).listen(80, () => {
		// eslint-disable-next-line no-console
		console.log('Listening for ACME http-01 challenges on 80');
	});

	// Handle HTTPS connections
	return http2Server.listen(443, (err) => {
		if (err) throw err;
		// eslint-disable-next-line no-console
		console.log('Listening for http2 requests on 443');
	});
}).catch((err) => {
	throw err;
});
