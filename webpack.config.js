const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve('public/index.html'),
    title: 'Energy Data App'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              loader: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
}
