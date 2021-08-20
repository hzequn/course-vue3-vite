import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './index.css'
import api from '@/utils/request' 
import HelloWorld from "@/components/HelloWorld.vue"
const app = createApp(App)

console.log(ElementPlus)
app.config.globalProperties.$api = api

app.component('HelloWorld', HelloWorld).use(ElementPlus).use(router).use(store).mount('#app')
