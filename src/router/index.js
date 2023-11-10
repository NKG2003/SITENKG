import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/views/HomeView.vue";
import Contacts from "/src/views/ContactsView.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
