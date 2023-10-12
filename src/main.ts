import VueCountdown from '@chenfengyuan/vue-countdown'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/main.less'
import 'virtual:uno.css'
import 'element-plus/es/components/message/style/css'

import env from '@/../env.yaml'
// import 'hover.css'

import Particles from 'vue3-particles'

const mode = import.meta.env.MODE
const config = env[mode]
window.config = config

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(Particles)

app.component(VueCountdown.name, VueCountdown)

app.mount('#app')
