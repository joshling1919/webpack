const path = require('path');

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
      }
    ]
  }
};

module.exports = config;
