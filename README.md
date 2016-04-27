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

## Advanced Builds
## Adding CSS
## Adding Images & Fonts to Your Build
## Webpack Tools
## Webpack and Front End Frameworks

