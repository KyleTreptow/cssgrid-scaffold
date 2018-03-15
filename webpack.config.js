var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var postcssMerge = require('postcss-merge-selectors');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        grid: './entry/grid.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                        loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};