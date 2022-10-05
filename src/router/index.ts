import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/note/:id",
    name: "View",
    meta: { transition: "slide-right" },
    component: () => import("../pages/note/NotePage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export const animation = "fade";
export default router;
