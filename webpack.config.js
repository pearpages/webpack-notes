module.exports = {
    entry: ["./app.js","./utils.js"],
    output: {
        filename: "bundle.js"
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