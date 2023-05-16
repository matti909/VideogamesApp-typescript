import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfig, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';

const buildDirectory = 'dist';

type Configuration = WebpackConfig & {
  devServer?: WebpackDevServerConfig;
};

const config: Configuration = {
  mode: 'development',
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: '[name].[contenthash].js', 
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  infrastructureLogging: {
    level: 'error',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
};

export default config;
