const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const basePlugin = require('./webpack.config');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    module: basePlugin.module,
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mqtt-browser-lib',
        libraryTarget: 'umd'
    },
    optimization: {
        minimizer:[new TerserPlugin()]
    },
    externals: [
        'int64-buffer'
    ],
    node: {
        process: true,
        buffer: true
    }
};