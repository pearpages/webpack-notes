var path = require('path'); // this module is part of node

var ExtractTextPlugin = require('extract-text-webpack-plugin'); // <--

module.exports = {
    context: path.resolve('js'), // the root
    entry: ['./app'],
    output: {
        path: path.resolve('build/'), // <--
        publicPath: '/public/assets/', // <--
        filename: "bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("styles.css") // <--
    ],
    devServer: {
        contentBase: 'public'
    },
    watch: true,
    module: {
        
        loaders : [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader") // <--
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader") // <--
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};