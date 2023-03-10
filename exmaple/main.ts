import { createApp, h } from 'vue'
import { createApp as createPIXI } from 'vue-runtime-pixi'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppPIXI from './AppPIXI.vue'

const app = createApp(App)
app.mount('#app')

const appPIXI = createPIXI(AppPIXI)

appPIXI.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/Animation1' },
      { path: '/Animation1', component: () => import('./Animation1.vue') },
      { path: '/Animation2', component: () => import('./Animation2.vue') },
      { path: '/Animation3', component: () => import('./Animation3.vue') },
      { path: '/Animation4', component: () => import('./Animation4.vue') },
      { path: '/Snake 🐍', component: () => import('./Snake🐍.vue') },
      { path: encodeURI('/Snake 🐍'), component: () => import('./Snake🐍.vue') },
      { path: '/PlaneFights 🚀', component: () => import('./PlaneFights🚀.vue') },
      { path: encodeURI('/PlaneFights 🚀'), component: () => import('./PlaneFights🚀.vue') }
    ]
  })
)

appPIXI.mount()

document.querySelector('#app')?.appendChild(appPIXI._props.app.view)
