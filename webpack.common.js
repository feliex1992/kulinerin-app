const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/images'),
          to: path.resolve(__dirname, 'dist/images/'),
        },
        {
          from: path.resolve(__dirname, 'src/public/webfonts'),
          to: path.resolve(__dirname, 'dist/webfonts/'),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: './src/public/favicon.png',
      mode: 'webapp',
      devMode: 'webapp',
      favicons: {
        appName: 'KulinerIn App',
        appShortName: 'KulinerIn',
        appDescription: 'Temukan tempat makan favoritmu di sini.',
        developerName: 'Jafar Pahrudin',
        background: '#f2f2f2',
        theme_color: '#f2f2f2',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
    new CleanWebpackPlugin(),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
