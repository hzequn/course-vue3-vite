<template>
  <el-config-provider :locale="locale">
    <img src="@/assets/logo.png" alt="">
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref, defineComponent } from "vue"
export default defineComponent({
  name: 'app',
  components: { [ElConfigProvider.name]: ElConfigProvider },
  setup() {
    const locale = ref(zhCn)
    return { locale }
  }
})
</script>
