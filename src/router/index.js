import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cohorts from "../views/Cohorts";
import Students from "../views/Students";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cohorts",
    name: "Cohorts",
    component: Cohorts,
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
