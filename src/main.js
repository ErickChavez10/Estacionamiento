import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Login from "./screen/login/container/index.vue";
import Home from "./screen/home/container/index.vue";
import Mapa from "./screen/mapa/container/index.vue";
import Otra from "./screen/otra/index.vue";
import Estacionamiento from "./screen/estacionamiento/container/index.vue";
import Admin from "./screen/admin/index.vue";
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/Estacionamiento",
    name: "estacionamiento",
    component: Estacionamiento,
  },
  {
    path: "/Mapa",
    name: "Mapa",
    component: Mapa,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Otra",
    name: "Otra",
    component: Otra,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
