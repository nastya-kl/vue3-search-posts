import MainPage from "@/components/pages/MainPage";
import PostsPage from "@/components/pages/PostsPage";
import AboutPage from "@/components/pages/AboutPage";
import PostPage from "@/components/pages/PostPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
