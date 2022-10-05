import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
import NotePage from "../pages/note/NotePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/note/:id",
    name: "View",
    component: NotePage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export const animation = "fade";
export default router;
