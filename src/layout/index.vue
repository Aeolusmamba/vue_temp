<template>
  <el-container class="app-wrapper">
    <el-aside width="205px" class="sidebar-container">
      <div class="title">智能灯控平台</div>
      <Menu />
    </el-aside>
    <el-container class="container">
      <el-header><Headers /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
import Headers from './headers'
// import { computed } from 'vue'
// import { useStore } from 'vuex'
</script>

<style lang="scss" scoped>
.title.title.title{
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
}
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
