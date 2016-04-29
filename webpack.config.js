var path = require('path'); // this module is part of node

module.exports = {
    context: path.resolve('js'), // the root
    entry: ['./app'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    
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
                loader: "style-loader!css-loader"
            },
             {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
             }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};