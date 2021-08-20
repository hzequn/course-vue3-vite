import $http from './axi'
import axios from 'axios'
export default {
  truckLocationByPage(obj) {
    return $http.http('get', `/ydypf/sys/member/truckLocationByPage.action`, obj)
  },
}
