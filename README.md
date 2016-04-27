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

#### Webpack Dev Server

```bash
npm install webpack-dev-server -g
```

### Building Multiple Files
### Using Loaders
### Using Preloaders
### Creating a Start Script
### Production vs. Dev Builds

## Advanced Builds
## Adding CSS
## Adding Images & Fonts to Your Build
## Webpack Tools
## Webpack and Front End Frameworks

