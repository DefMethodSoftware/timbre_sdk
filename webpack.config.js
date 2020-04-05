const path = require('path')
const webpack = require('webpack')

let config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './'),
    library: 'timbre-javascript-sdk',
    libraryTarget: 'umd',
    filename: 'index.js',
    libraryExport: 'default'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL || null),
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["add-module-exports"]
          }
        }
      }
    ]
  }
 };
module.exports = config