## Introduction

### Usual Problems

- Multiple Web Requests -> Combining Files
- Code Size -> Minifying Files
- File order Dependencies -> Maintaining File Order
- Transpilation
- Linting

### Other Solutions

- Server-side tools
- Task Runners : grunt, gulp

### Webpack Solution

Can also combine css with the js.

- Use NPM
- Use a Module System
  - AMD
  - CommonJS
  - ES6 modules

## Basic Builds

### CLI Basics

```bash
npm install -g webpack
```

```bash
# bundle.js is tye typical name
webpack ./app.js bundle.js
```

### Adding a config file

```webpack.config.js``` it is a *CommonJS* module.

```javascript
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    }
};
```

### Watch Mode and the Webpack Dev Server

```bash
webpack --watch
```

```javascript
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    watch: true
};
```

#### Webpack Dev Server

```bash
npm install webpack-dev-server -g
webpack-dev-server --inline
```

### Building Multiple Files

```javascript
module.exports = {
    entry:  ["./app.js","./utils.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true
};
```

### Using Loaders

e.g.

```bash
npm install --save-dev babel-core babel-loader
```

```json
// .babelrc
{
    "presets": ["es2015"]
}
```

#### ES6

```js
// ...
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
```

### Using Preloaders

#### JSHint

```js
// ...
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
```

### Creating a Start Script

```js
// package.json
  "scripts": {
    "start": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Production vs. Dev Builds

```bash
webpack -p # minified
```

```bash
# this module removes statements
npm install --save-dev strip-loader
```

```js
var devConfig = require('./webpack.config.js');
var WebpackStrip = require('strip-loader');
var stripLoader = {
    test: [/\.js$/,/\.es6$/],
    exclude: '/node_modules/',
    // we are removing console.log statements
    loader: WebpackStrip.loader('console.log')    
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
```

```bash
webpack --config webpack-production.config.js -p
```

## Advanced Builds

### Organizing Files and Folders

Using the ```webpack-dev-server``` the files are virtually created.

```js
var path = require('path'); // this module is part of node

module.exports = {
    context: path.resolve('js'), // the root
    entry: ["./app.js","./utils.js"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: 'public/assets/js/', // <-- 
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public' // <--
    },
   
   // ..
};
```

### Working with ES6 Modules

Check the babel-loader config section above, plus the .babelrc file.

### Adding Source Maps

```bash
webpack -d
webpack-dev-server -d
```

Then you can use the ```debugger;``` statement.

### Creating Multiple Bundles (e.g. laxy loading)

```js
var path = require('path'); // this module is part of node
var webpack = require('webpack'); // <--

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js'); // <--

module.exports = {
    context: path.resolve('js'), // the root
    entry: { // <--
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js" // <--
    },
    plugins: [commonsPlugin], // <--
    
    // ...
};
```

## Adding CSS

### CSS and Style Loaders

```bash
npm install css-loader style-loader url-loader file-loader --save-dev
```

```js
// require('./login');
import {login} from "./login";
import {} from "../css/bootstrap/css/bootstrap.css";
import {} from "../css/app.css";

login('admin','radical');

document.write("Hello World!!!");

console.log('App loaded');
```

```js
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
            { // <-- for the css
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
             { // <-- for the fonts
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
             }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
```

### Using SCSS and SASS

```bash
npm install sass-loader node-sass --save-dev
```

```js
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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
```

### Using LESS



### Creating Separate CSS Bundle

### Auto Prefixer

## Adding Images & Fonts to Your Build
## Webpack Tools
## Webpack and Front End Frameworks

