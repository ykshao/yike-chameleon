var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('../config')
var utils = require('./utils')
var webpackBaseConfig = require('./webpack.base.conf.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        'zyb-element-components': './src/index.js'
    },
    module: {
        rules: utils.styleLoaders({
          sourceMap: config.build.productionSourceMap,
          extract: true
        })
    },

    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        library: 'yike-chameleon',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
          filename: '[name].css'
        }),
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        // new HtmlWebpackPlugin({
        //   filename: config.build.index,
        //   template: 'index.html',
        //   inject: true,
        //   minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true
        //     // more options:
        //     // https://github.com/kangax/html-minifier#options-quick-reference
        //   },
        //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        //   chunksSortMode: 'dependency'
        // }),
    ]
});
