const env = process.env.NODE_ENV || 'development';

import yargs from 'yargs';
import {createServer} from 'http';
import Koa from 'koa';
import compress from 'koa-compress';
import serveStatic from 'koa-static';
import {green, gray, magenta, cyan, red} from 'chalk';

const {argv} = yargs.options({
  port: {
    alias: 'r',
    type: 'number',
    describe: 'Port to serve on',
    default: 3000,
  },
});

const server = new Koa();

server.use(compress())
  .use(serveStatic('dist/'));

const app = createServer(server.callback());
app.listen(argv.port);
console.log(green('Application'), cyan('Wumpbot'), green('started at'),
  red(new Date()));
console.log(green('port'), gray(argv.port));
console.log(green('Environment:'), magenta(env));
