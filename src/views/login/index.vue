<template>
  <div class="box common_flex">
    <div class="form_box">
      <el-form ref="form" :model="data.form" :rules="rules" label-width="60px" align="center">
        <el-form-item label="账号:" prop="username">
          <el-input v-model="data.form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="data.form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getCurrentInstance, reactive } from 'vue'
const { appContext: { config: { globalProperties: { $api } } } } = getCurrentInstance()
const router = useRouter()
const data = reactive({
  form: {
    username: '',
    password: ''
  }
})
const rules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
}
const handLogin = () => {
  $api.user_login({}).then(res => {

  })
  console.log(data.form)
}
</script>

<style lang="scss" scoped>
.box {
  background: #f5f5f5;
  .form_box {
    background: #fff;
    width: 500px;
    padding: 50px 50px 30px 50px;
    border-radius: 20px;
    margin: 100px auto;
  }
}
</style>
