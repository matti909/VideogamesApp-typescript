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
    filename: 'bundle.js',
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
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
    open: true,
    hot: true,
  },
};

export default config;
