// Adding ssr to vue project

import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

const app = createSSRApp(App)
const head = createHead()

app.use(router)
app.use(head)

export { app }