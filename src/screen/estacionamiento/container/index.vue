<template>
  <v-app>
    <Navbar title="Tec Laguna" />
    <v-container dark> 
      <BotonesSel />
      <Sitio dark />
    </v-container>
  </v-app>
</template>

<script>
import BotonesSel from "../components/BotonesSel";
import Sitio from "../components/Sitio";

import Socket from "@/store/sockets.js";
import Navbar from '../../../components/navbar/container/navbar.vue';

export default {
  name: "estacionamiento",
  components: { BotonesSel, Sitio, Navbar },
  created(){
    Socket.on("connection");
  }, 
};
</script>

<style>
</style>