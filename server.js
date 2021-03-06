// @flow strict

/* eslint-disable no-console */

import compression from 'compression';
import greenlock from 'greenlock-express';
import greenlockStoreFs from 'greenlock-store-fs';
import http from 'http';
// flow-disable-next-line
import http2 from 'http2';
import Koa from 'koa';
import koaConnect from 'koa-connect';
import koaSend from 'koa-send';
import next from 'next';
import redirectHttps from 'redirect-https';
import Router from 'koa-router';

type CtxType = any;

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;
const PORT = parseInt(process.env.PORT, 10) || 3000;
const __DEV__ = process.env.NODE_ENV !== 'production';

const app = next({dev: __DEV__});
const handle = app.getRequestHandler();

app.prepare().then((): any => {
	const server = new Koa();
	const router = new Router();

	// Enable gzip compression
	server.use(koaConnect(compression()));

	router.get('/robots.txt', (ctx: CtxType): any => koaSend(ctx, ctx.path, {
		maxAge: ONE_YEAR,
	}));

	router.get('*', async (ctx: CtxType) => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.use((
		ctx: CtxType,
		next: () => Promise<void>
	): Promise<void> => {
		ctx.res.statusCode = 200;
		return next();
	});

	server.use(router.routes());

	// Dev server doesn't use any of the greenlock and HTTP2 stuff, so we can
	// immediately serve the application.
	if (__DEV__) {
		return server.listen(PORT, (err: Error) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${PORT}`);
		});
	}

	// Enable greenlock SSL
	const gLock = greenlock.create({
		agreeTos: true,
		approveDomains: ['magna.gg', 'www.magna.gg'],
		configDir: '/tmp/etc/greenlock',
		email: 'info@globexdesigns.com',
		server: 'https://acme-v02.api.letsencrypt.org/directory',
		store: greenlockStoreFs,
		version: 'draft-11',
	});

	// Handle HTTPS connections with HTTP/2
	const http2Server = http2.createSecureServer({
		...gLock.tlsOptions,
		allowHTTP1: true,
	}, server.callback());

	// Handle HTTP connnections
	const acmeChallengeHandler = gLock.middleware(redirectHttps());
	http.createServer(acmeChallengeHandler).listen(80, () => {
		console.log('Listening for ACME http-01 challenges on 80');
	});

	// Handle HTTPS connections
	return http2Server.listen(443, (err: Error) => {
		if (err) throw err;
		console.log('Listening for http2 requests on 443');
	});
}).catch((err: Error) => {
	throw err;
});
