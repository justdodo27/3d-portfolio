import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue"
import Projects from "../views/Projects.vue"
import Project from "../views/Project.vue"

const routes = [
  {
    path: "/",
    redirect: "/en"
  },
  {
    path: "/:language?",
    name: "Home",
    component: Home,
  },
  {
    path: "/:language/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/:language/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/:language/project/:src",
    name: "Project",
    component: Project
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
