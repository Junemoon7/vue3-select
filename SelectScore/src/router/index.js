import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", name: "Home", component: () => import("../views/Home.vue") },
  {
    //   path:'/Result',
    path: "/Result/:studentNum/:Date/:sex/:List",
    name: "Result",
    component: () => import("../views/Result.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
