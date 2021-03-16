const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        port: 4000,
        hot: true,
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    },
    output: {
        publicPath: '',
        filename: 'bundle.[contenthash:4].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new htmlWebpack({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ]
}