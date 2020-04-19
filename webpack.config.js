const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "none",
    entry: './src',
    output: {
        filename: "[name].bundle.js",
        path : path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.json', '.js']
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
