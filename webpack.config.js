var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'//打包发布的生成的文件
  }
};