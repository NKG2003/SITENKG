import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import Contacts from "@/views/ContactsView.vue";
import Process from "@/views/Process.vue";
import History from "@/views/History.vue";
import Org_strucutre from "@/views/Org_strucutre.vue";
import Leadership from "@/views/Leadership.vue";
import Regulations from "@/views/Regulations.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/process",
    name: "Process",
    component: Process,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/org_strucutre",
    name: "Org_strucutre",
    component: Org_strucutre,
  },
  {
    path: "/leadership",
    name: "Leadership",
    component: Leadership,
  },
  {
    path: "/regulations",
    name: "Regulations",
    component: Regulations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


