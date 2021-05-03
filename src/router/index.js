import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cohorts from "../views/Cohorts";
import Students from "../views/Students";
import Instructors from "../views/Instructors";

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
    path: "/instructors",
    name: "Instructors",
    component: Instructors,
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
