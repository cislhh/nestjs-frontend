import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./stroe";

function bootstrap() {
  const app = createApp(App);

  // router
  setupRouter(app);

  // store
  setupStore(app);

  app.mount("#app");
}

bootstrap();
