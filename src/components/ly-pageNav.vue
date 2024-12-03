<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @select="itemSelect"
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="users">
        <el-icon><document /></el-icon>
        <span>用户列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const itemSelect = (key: string) => {
  // console.log(key);
  router.push(key);
  // console.log(, "data----useRouter");
};
</script>

<style scoped></style>
