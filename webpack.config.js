'use strict';

var webpack = require('webpack');

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        })
    );
}

module.exports = {
    externals: {
        preact: {
            root: 'Preact',
            commonjs2: 'preact',
            commonjs: 'preact',
            amd: 'preact'
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    output: {
        library: 'PreactCustomScrollbars',
        libraryTarget: 'umd'
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js']
    }
};
