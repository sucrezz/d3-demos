<template>
  <nav :class="isCollapse ? 'unflod' : 'flod'">
    <i :class="iconFold" @click.stop="toggleIconFold"></i>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Nav extends Vue {
  iconFold: string = "el-icon-s-unfold";
  isCollapse: boolean = true;

  toggleIconFold() {
    this.iconFold =
      this.iconFold == "el-icon-s-unfold"
        ? "el-icon-s-fold"
        : "el-icon-s-unfold";
    this.isCollapse = !this.isCollapse;
  }
  handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="scss">
nav {
  width: 6.5rem;
  height: 100%;
  position: relative;
  .el-menu--collapse {
    width: 6.5rem;
    box-sizing: border-box;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 20rem;
    height: 100%;
  }
  &.unflod {
    width: 6.5rem;
  }
  &.flod {
    width: 20rem;
  }
  & > i {
    position: absolute;
    top: 1rem;
    right: -3rem;
    display: block;
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    cursor: pointer;
    color: lightyellow;
  }
  .el-menu {
    border-right-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
