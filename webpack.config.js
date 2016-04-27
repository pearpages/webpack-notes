module.exports = {
    entry: ["./app.js","./utils.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,
    module: {
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