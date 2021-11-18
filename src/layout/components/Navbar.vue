<template>
  <el-menu class="navbar" mode="horizontal">
    <Hamburger class="hamburger-container" :is-active="opened" @toggleClick="toggleSideBar" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <Screenfull class="screenfull" />
      </el-tooltip>
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
          <!-- <img :src="user.avatar ? user.avatar : '@/assets/images/logo.png'" class="user-avatar" /> -->
          <span>{{user.name}}</span>
          <i class="el-icon-arrow-down" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/')">用户中心</el-dropdown-item>
            <el-dropdown-item divided @click="$router.push('/updatemsg')">编辑个人资料</el-dropdown-item>
            <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'

const router = useRouter()
const store = useStore()
const opened = computed(() => store.state.app.sidebar.opened)
const user = computed(() => store.state.user)
console.log(store.state.user)

const toggleSideBar = () => {
  store.dispatch('app/toggleSideBar')
}

const editPossword = () => {
  ElMessage.warning('请联系管理员')
}

const loginOut = () => {
  ElMessageBox.confirm('退出登录', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    store.dispatch('user/logout').then(() => {
      router.push('/login')
    })
  })
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  line-height: 50px;

  .hamburger-container {
    float: left;
    height: 50px;
    padding: 0 10px;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  :deep(.right-menu) {
    display: flex;
    float: right;
    height: 100%;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      margin: 0 4px;
      vertical-align: middle;
    }

    .international {
      vertical-align: top;
    }

    .theme-switch {
      vertical-align: 15px;
    }

    .avatar-container {
      // height: 50px;
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;
        display: flex;
        align-items: center;
        .user-avatar {
          width: 42px;
          height: 42px;
          cursor: pointer;
          border-radius: 42px;
        }
        .el-icon-arrow-down {
          font-size: 14px;
          font-weight: bolder;
        }
        & > span {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
