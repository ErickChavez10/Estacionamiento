<template>
  <v-app>
    <Toolbar title="Estacionamiento" back={true} to="home"/>
    <v-container dark> 
      <BotonesSel />
      <Sitio dark />
    </v-container>
  </v-app>
</template>

<script>
import BotonesSel from "../components/BotonesSel";
import Sitio from "../components/Sitio";
import Toolbar from "../../../components/toolbar";
import Socket from "@/store/sockets.js";

export default {
  name: "estacionamiento",
  components: { BotonesSel, Sitio, Toolbar },
  created(){
    Socket.on("connection",()=>{
      
    });
  }, 
};
</script>

<style>
</style>