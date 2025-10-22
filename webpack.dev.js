const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 5500,
        watchFiles: ['./src/app.html', './src/app.js', './src/styles.css']
    },
});