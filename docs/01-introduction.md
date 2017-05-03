# Introduction

Wepback turns everything into a module (js, html, fonts, css, images...).

+ loaders
+ plugins (lodash, commonsChunkPlugin, ServiceWorkers...)

```js
// webpack.config.js

const {resolve} = require('path');

module.exports = function () {
    return {
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js'
        }
    }
}
```

## webpack-dev-server

```bash
npm i --save-dev webpack-dev-server
```

### Pick where to server the files from

```bash
webpack-dev-server --content-base ./public
```