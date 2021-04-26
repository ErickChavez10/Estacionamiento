<template>
  <div>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Sele Parking{{title?': '+title:''}} </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer dark v-model="drawer" absolute left temporary>
      <div v-if="session">
        <DrawerSesion drawer="drawer" :user="user" />
      </div>
      <div v-else>
        <DrawerNoSesion />
      </div>
    </v-navigation-drawer>
    <div style="margin-top:60px"></div>
  </div>
</template>

<script>
import DrawerSesion from "../components/drawer-sesion.vue";
import DrawerNoSesion from "../components/drawer-no-sesion.vue";
export default {
  name: "navbar",
  props:['title'],
  components: { DrawerSesion, DrawerNoSesion },
  created(){
    const n = JSON.parse(localStorage.getItem('@info'));
    this.session = n? true : false;
    this.user = n? n.user: null;
  },
  data() {
    return {
      drawer: false,
      session: false,
      user: null
    };
  },
};
</script>

<style>
.borde {
  border: 1px solid black;
}
.rounded {
  border-radius: 15px;
}
.img-size {
  width: 50px;
  height: 50px;
}
.container {
  justify-content: center;
  align-items: center;
}
</style>
