<template>
  <el-config-provider :locale="locale">
    <img src="@/assets/logo.png" alt="">
    <router-view />
    <Home msg="我是app传过来的数据" />
  </el-config-provider>
</template>

<script setup>
import Home from "./views/home/index.vue"
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from "vue"
// export default defineComponent({
// name: 'app',
// components: { Home, [ElConfigProvider.name]: ElConfigProvider },
// setup() {
const locale = ref(zhCn)
  // let locale = zhCn
  // return { locale }
  // }
// })
</script>
