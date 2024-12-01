import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./stroe";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

function bootstrap() {
  const app = createApp(App);

  // router
  setupRouter(app);

  // store
  setupStore(app);

  app.use(ElementPlus);

  app.mount("#app");
}

bootstrap();
