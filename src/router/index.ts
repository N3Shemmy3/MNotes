import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/note/:id",
    name: "View",
    meta: { transition: "slide-right" },
    component: () => import("../views/note/NoteView.vue"),
  },
  {
    path: "/About",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export const animation = "fade";
export default router;
