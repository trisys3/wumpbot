const env = process.env.NODE_ENV || 'development';

import {options as cliArgs} from 'yargs';
import {createServer} from 'http';
import Koa from 'koa';
import compress from 'koa-compress';
import serveStatic from 'koa-static';
import {green, gray, magenta, cyan, red, blue} from 'chalk';
import webpack from 'webpack';
import Sockets from 'socket.io';

import bundler from './webpack.config.babel';
import routes from './routes';

const socket = new Sockets();

const {argv} = cliArgs({
  port: {
    alias: 'r',
    type: 'number',
    describe: 'Port to serve on',
    default: 3000,
  },
});

const server = new Koa();
const bundle = webpack(bundler);

server.use(compress())
  .use(serveStatic('dist/'))
  .use(routes());

const app = createServer(server.callback());
socket.listen(app);
app.listen(argv.port);
console.log(green('Application'), cyan('Wumpbot'));
console.log(green('Started at'), red(new Date()));
console.log(green('Port'), gray(argv.port));
console.log(green('Environment:'), magenta(env));

bundle.watch({}, (err, stats) => {
  if(err) {
    console.log(err.stack || err);
    if(err.details) {
      console.error(err.details);
    }
    return;
  }

  const {hash, time, warnings, errors} = stats.toJson({
    assets: false,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    publicPath: false,
    reasons: false,
    source: false,
    version: false,
  });

  console.log(green('Bundle'), blue(hash), green('finished in'),
    gray(`${time} ms`));

  if(stats.hasErrors()) {
    console.error(errors);
    return;
  }

  if(stats.hasWarnings()) {
    console.warn(warnings);
  }

  socket.emit('hot-update');
});
