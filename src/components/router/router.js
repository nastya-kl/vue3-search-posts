import MainPage from "@/components/pages/MainPage";
import PostPage from "@/components/pages/PostPage";
import AboutPage from "@/components/pages/AboutPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;