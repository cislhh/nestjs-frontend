<template>
  <div id="Login">
    <div class="login-box">
      <el-form ref="formRef" :model="loginForm" label-width="auto">
        <el-form-item label="username" prop="username">
          <el-input
            type="text"
            placeholder="请输入username"
            v-model="loginForm.username"
          />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input
            type="password"
            placeholder="请输入password"
            show-password
            v-model="loginForm.password"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import service from "@/utils/axios";
import { reactive, ref } from "vue";
type loginFormType = {
  username: string;
  password: string;
};

const loginForm: loginFormType = reactive({
  username: "",
  password: "",
});

const login = () => {
  console.log(loginForm, "data----loginForm");
  service.post("/auth/login", loginForm).then((res) => {
    console.log(res, "data----res");
  });
};
</script>

<style scoped lang="scss">
#Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .login-box {
    width: 50%;
    background-color: red;
    border: 1px solid black;
    border-radius: 20px;

    padding: 20px 40px;
  }
}
</style>
