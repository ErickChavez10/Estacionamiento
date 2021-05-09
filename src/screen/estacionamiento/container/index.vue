<template>
  <v-app>
    <Navbar title="Tec Laguna" />
    <v-container dark>
      <BotonesSel @changePlace='changePlace' />
      <Sitio :zonaSel='zona' ref="sitio" />
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
      pos : 0,
      zona: 'A',
    };
  },
  created() {
    Socket.on("connection");
  },
  methods:{
    changePlace(zona){
      this.zona = zona;
      this.$refs.sitio.selZonaM();
    },

  }
};
</script>

<style>
</style>