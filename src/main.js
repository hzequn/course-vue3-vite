import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'
import api from '@/utils/request' 
const app = createApp(App)

app.config.globalProperties.$api = api

app.use(ElementPlus).use(router).use(store).mount('#app')
