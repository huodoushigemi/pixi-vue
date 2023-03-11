<p align="center">
  <img src="./public/techs-free-weekend.png" alt="pixi-react" width="310" />
</p>

<h1 align="center">Vue Runtime Pixi</h1>

<p align="center">
  <strong>Write PIXI applications using Vue SFC 👌</strong>
</p>

<br />

<p align="center">
  <img src="https://img.shields.io/github/forks/huodoushigemi/vue-runtime-pixi.svg?style=flat-square" />
  <img src="https://img.shields.io/github/stars/huodoushigemi/vue-runtime-pixi.svg?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="license" />
  <img src="https://img.shields.io/badge/pixi-v7+-ff69b4.svg?style=flat-square" alt="pixi version" />
</p>

<br />

## 📑 News!
- Full Vue3 support including [Vue Router](https://router.vuejs.org/)、[Pinia](https://pinia.vuejs.org/)、[VueUse](https://vueuse.org/)
- Typescript friendly

## 🌈 DEMO
- [exmaple-animation1](https://huodoushigemi.github.io/vue-runtime-pixi/#/Animation1)
- [exmaple-animation2](https://huodoushigemi.github.io/vue-runtime-pixi/#/Animation2)
- [exmaple-animation3](https://huodoushigemi.github.io/vue-runtime-pixi/#/Animation3)
- [exmaple-animation4](https://huodoushigemi.github.io/vue-runtime-pixi/#/Animation4)
- [exmaple-snake 🐍](https://huodoushigemi.github.io/vue-runtime-pixi/#/snake🐍)
- [exmaple-plane-fights 🚀](https://huodoushigemi.github.io/vue-runtime-pixi/#/plane-fights🚀)

## ⚙️ Installation
```shell
npm i -S vue-runtime-pixi
```

## 🦄 Use
```js
// main.ts
import { Application } from 'pixi.js'
import { createApp, h } from 'vue'
import { createApp as createPIXI } from 'vue-runtime-pixi'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

const RootComponent = {
  render() {
    return () => h('Text', { text: '😉test……', style: 'fill: red' })
  }
}

createPIXI(RootComponent).mount('#app')
```
```js
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { isPIXITag } from 'vue-runtime-pixi'

export default defineConfig({
  plugins: [
    vue({ template: { compilerOptions: { isCustomElement: isPIXITag } } })
  ]
})

```

## Used with VueRouter
```js
import { h } from 'vue'
import { createApp as createPIXI } from 'vue-runtime-pixi'
import { createRouter, createWebHashHistory， RouterView } from 'vue-router'

const RootComponent = {
  render: () => h(RouterView)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/aaa' },
    { path: '/aaa', component: { render: () => h('Text', { text: 'aaa……', style: 'fill: red' }) } },
    { path: '/bbb', component: { render: () => h('Text', { text: 'bbb……', style: 'fill: red' }) } },
  ]
})

createPIXI(RootComponent).use(router).mount('#app')
```


## ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute, please write the issue or give me a Pull Request freely.

[![fork](https://img.shields.io/github/forks/huodoushigemi/vue-runtime-pixi.svg?style=flat-square)](https://github.com/huodoushigemi/vue-runtime-pixi)
[![fork](https://img.shields.io/github/stars/huodoushigemi/vue-runtime-pixi.svg?style=flat-square)](https://github.com/huodoushigemi/vue-runtime-pixi)
