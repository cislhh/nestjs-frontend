<template>
  <RouterView />
</template>

<script setup lang="ts">
import service from "@/utils/axios";

service.get("/user/profile").then((res) => {
  console.log(res, "data----res");
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
