import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Pokemons from "../views/Pokemons.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/pokemons",
    name: "Pokemons",
    component: Pokemons,
  }
  
];

const router = new VueRouter({
  routes,
});

export default router;
