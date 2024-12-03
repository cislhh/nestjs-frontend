<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <LyPageNav />
        </el-aside>
        <el-main class="main"><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LyPageNav from "./components/ly-pageNav.vue";

// import service from "@/utils/axios";

// service.get("/user/profile").then((res) => {
//   console.log(res, "data----res");
// });
</script>
<style scoped lang="scss">
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .header {
    background-color: red;
  }
  .aside {
    background-color: purple;
    overflow-y: scroll;
  }
  .aside::-webkit-scrollbar {
    display: none;
  }
  .main {
    height: 100%;
    background-color: greenyellow;
  }
}
</style>
