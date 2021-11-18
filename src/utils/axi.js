import router from '@/router/index.js'
import axios from 'axios'
import cookies from 'js-cookie'
import store from '@/store/index.js'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'

axios.defaults.timeout = 15000
axios.defaults.withCredentials = false
function checkStatus(response) {
  console.log(response)
}
axios.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    if (config.headers['Content-Type'] === undefined) { 
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      const data = new FormData()
      for (const key in config.data) {
        if (config.data[key] != null && config.data[key] != undefined) {
          data.append(key, config.data[key])
        }
      }
    config.data = data
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.success && res.appCode === '-0002') {
      router.replace({ path: '/login' })
    }
    return response
  },
  error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default {
  http(methods, url, params) {
      if (methods === 'get') {
          url.indexOf('?') > -1 ? (url += '&' + new Date().getTime()) : (url += '?' + new Date().getTime())
      }
      return axios({
          method: methods,
          url: url,
          params: (methods === 'get' || methods === 'delete') && params,
          data: methods === 'post' && params
      })
      .then(res => {
          if (res.status !== 200) checkStatus(res)
          return res
      })
      .catch(err => {
          throw err
      })
  },
}
