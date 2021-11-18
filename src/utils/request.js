import $http from './axi'
import axios from 'axios'
export default {
  handlegetList(obj) {
    return $http.http('get', `/api.getlist`, obj)
  },
  user_login(obj) { 
    return $http.http('post', `/api.getlist`, obj)
  },
  user_logout(obj) { 
    return $http.http('post', `/api.getlist`, obj)
  },
  get_user_info(obj) { 
    return $http.http('post', `/api.getlist`, obj)
  }
}
