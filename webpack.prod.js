const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 5500,
        watchFiles: ['./src/app.html', './src/app.js', './src/styles.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(mp3|wav|ogg|aac)$/i, // Match common audio file extensions
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simply Sushi - シンプリー・スシ',
            template: './src/app.html',
        })
    ],
}