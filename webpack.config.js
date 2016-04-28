var path = require('path'); // this module is part of node

module.exports = {
    context: path.resolve('js'), // the root
    entry: ["./app.js","./utils.js"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: 'public/assets/js/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    watch: true,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders : [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};