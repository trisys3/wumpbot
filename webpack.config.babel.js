import {HotModuleReplacementPlugin as HMR} from 'webpack';
import IndexHtml from 'html-webpack-plugin';

const hmr = new HMR();
const indexHtml = new IndexHtml({template: 'index.html'});

const plugins = [hmr, indexHtml];

const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {cacheDirectory: true},
};

const cssLoader = {
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        minimize: false,
        import: false,
        modules: true,
        camelCase: 'only',
        importLoaders: 1,
      },
    },
    'postcss-loader',
  ],
};

if(process.env.NODE_ENV === 'production') {
  cssLoader.use.unshift(
    {
      loader: 'file-loader',
      options: {name: '[name].css'},
    },
    'extract-loader',
  );
} else {
  cssLoader.use.unshift('style-loader');
}

const imgLoader = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [{
    loader: 'img-loader',
    options: {minimize: true},
  },
  {
    loader: 'url-loader',
    options: {name: '[sha512:hash].[ext]'},
  }],
};

const htmlLoader = {test: /\.html$/, use: 'html-loader'};

const loaders = [
  jsLoader,
  cssLoader,
  imgLoader,
  htmlLoader,
];

export default {
  entry: {app: './app.js'},
  output: {
    filename: '[name]/[hash].bundle.js',
    chunkFilename: '[name]/[hash]/chunks/[chunkhash].chunk.js',
    path: `${process.cwd()}/dist/`,
    hotUpdateMainFilename: 'hot/[hash].update.json',
    hotUpdateChunkFilename: 'hot/[id].[hash].update.js',
    pathinfo: process.NODE_ENV === 'development',
  },
  plugins,
  module: {rules: loaders},
  devtool: 'source-map',
  recordsPath: `${__dirname}/records.json`,
};
