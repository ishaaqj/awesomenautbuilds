const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/Main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main_bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new htmlWebpackPlugin ({
            // it's ../ because the path for this configuration is to the js directory in output.
            filename: './index.html',
            template: './src/index.html'
        })
    ]

}