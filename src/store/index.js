import { createStore } from 'vuex'

const modulesFiles = import.meta.globEager('./modules/*.js')
const pathList = []

for (const path in modulesFiles) {
  pathList.push(path)
}

const modules = pathList.reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({
  modules
})

export default store
