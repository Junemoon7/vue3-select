import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPersist)
createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')
