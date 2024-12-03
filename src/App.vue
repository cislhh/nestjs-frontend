<template>
  <RouterView />
</template>

<script setup lang="ts">
import service from "@/utils/axios";

service.get("/user/profile").then((res) => {
  console.log(res, "data----res");
});
</script>
<style scoped></style>
