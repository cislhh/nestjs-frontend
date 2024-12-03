<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="120" />
    <el-table-column prop="username" label="用户名" width="150" />
    <el-table-column prop="password" label="密码" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick(scope)">
          修改
        </el-button>
        <el-button link type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import service from "@/utils/axios";
import { reactive } from "vue";

const handleClick = (row) => {
  console.log(row);
};

const tableData = reactive([]);
service.get("/user").then((res) => {
  console.log(res, "data----res");
  tableData.splice(0, tableData.length, ...(res as unknown as []));
});
</script>
