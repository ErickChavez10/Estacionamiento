<template>
  <v-app>
    <Navbar title="Tec Laguna" />
    <v-container dark>
      <BotonesSel />
      <Sitio/>
    </v-container>
  </v-app>
</template>

<script>
import BotonesSel from "../components/BotonesSel";
import Sitio from "../components/Sitio";

import Socket from "@/store/sockets.js";
import Navbar from "../../../components/navbar/container/navbar.vue";

export default {
  name: "estacionamiento",
  components: { BotonesSel, Sitio, Navbar },
  data() {
    return {
    };
  },
  created() {
    Socket.on("connection");
  },
  methods:{
  }
};
</script>

<style>
</style>