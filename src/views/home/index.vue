<template>
  <div class="my_style">我是vuex过来的数据：{{count}}</div>
  <div>我是vuex过来的数据2：{{count2}}</div>
  <button @click="handleAddCount">我来修改Count的数据，每次加1</button>
  <el-button> ndd </el-button>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
  </el-date-picker>
  <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" :shortcuts="shortcuts">
  </el-date-picker>
</template>

<script setup>
import { computed, getCurrentInstance, reactive, ref } from "vue"
import { useStore } from 'vuex'
const value2 = ref('')
console.log(getCurrentInstance())
const store = useStore()
const props = defineProps()
const emit = defineEmits()
console.log(props)
console.log(emit)
const mainStyle = reactive({
  color: 'red',
  fontSize: '20px'
})
const fontWeight = ref('600')
const count = computed(() => store.state.count)
const count2 = computed(() => store.getters.getCount)
function handleAddCount() {
  store.dispatch('addAction', 1)
}
</script>

<style lang="scss" scoped>
.my_style {
  color: v-bind("mainStyle.color");
  font-size: v-bind("mainStyle.fontSize");
  font-weight: v-bind(fontWeight);
}
</style>
