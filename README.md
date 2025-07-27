# vuepress-plugin-fullscreen-table

![license](https://img.shields.io/npm/l/vuepress-plugin-fullscreen-table)
![check](https://img.shields.io/badge/VuePress-2.x-brightgreen)
![npm](https://img.shields.io/npm/v/vuepress-plugin-fullscreen-table)

`vuepress-plugin-fullscreen-table` is a plugin for `VuePress@2.x` that adds a fullscreen mode for tables to improve
readability.

![demo](demo.gif)

## Installation 

Install the plugin via npm:
```sh
npm install vuepress-plugin-fullscreen-table --save-dev  
```

Or via yarn:
```sh
yarn add vuepress-plugin-fullscreen-table -D  
```

## Setup

Add the plugin to your VuePress configuration (`docs/.vuepress/config.js` or `docs/.vuepress/config.ts`):
```js
import { defineUserConfig } from 'vuepress'  
import { fullscreenTablePlugin } from 'vuepress-plugin-fullscreen-table'  

export default defineUserConfig({  
  plugins: [  
    // ...
    fullscreenTablePlugin()  
  ]  
})  
```

## License

MIT © Ivan Bolshakov
