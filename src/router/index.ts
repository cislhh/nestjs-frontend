import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    // component: () => import("../views/login/login.vue"),
  },
  {
    path: "/reg",
    component: () => import("@/views/login/reg.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    // redirect: "/",
  },
  {
    path: "/users",
    component: () => import("@/views/users/index.vue"),
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// export default router;
export function setupRouter(app: App<Element>) {
  app.use(router);
}
