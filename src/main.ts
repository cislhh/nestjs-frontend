import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index.ts";

const app = createApp(App);
app.use(router); // 2.引用router
app.mount("#app");
