import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { Configuration } from 'webpack';

const buildDirectory = 'build';

const config: Configuration = {
  mode: 'production',
  entry: ['./src/index.ts'],
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: 'index.js',
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: []
};

export default config;
