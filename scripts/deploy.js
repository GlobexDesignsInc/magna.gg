/* eslint-disable import/no-commonjs, no-unused-vars, flowtype/require-valid-file-annotation */

const Deploy = require('@globexdesigns/deploy');

const D = new Deploy({
	directories: ['.next', 'static'],
	files: ['package.json', 'server.js', 'yarn.lock'],
	host: '204.48.29.253',
	private_key_path: '/home/globex/.ssh/id_rsa',
	target_dir: '/var/www/magna.gg',
	user: 'root',
}).run();
