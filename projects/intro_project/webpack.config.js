const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        // Any regex we pass to the test property will be taken by webpack
        // and applied to the file name of every file that we import
        // into our project. The bottom regex expression specifically looks to
        // see if the file ends with '.js'. If it does, Babel will be applied.
        test: /\.js$/
      },
      {
        // loaders are applied right to left
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        user:[
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
