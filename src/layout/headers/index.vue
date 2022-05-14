<template>
  <div class="navbar">
    <Breadcrumb />
    <div class="title">{{pageTitle.name}}</div>
    <div class="navbar-right">
      <Driver class="navbar-item" />
      <screen-full class="navbar-item" />
      <Lang class="navbar-item" />
      <Avatar class="navbar-item" />
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import Avatar from './components/avatar.vue'
import Lang from './components/lang.vue'
import ScreenFull from './components/screenFull.vue'
import Driver from './components/driver'
import { onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'
const pageTitle = ref({
  name: null
})
onBeforeRouteUpdate(to => {
  switch (to.name) {
    case 'users':
      pageTitle.value.name = '用户管理'
      break
      case 'reports':
      pageTitle.value.name = '数据统计'
      break
      case 'control':
      pageTitle.value.name = '远程控制'
      break
      default:
        pageTitle.value.name = null
        break
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .title{
    flex: 3;
    height: 18px;
    line-height: 18px;
    color: #97a8be;
    font-weight: 600;
    text-align: center;
  }
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
