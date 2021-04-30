<template>
  <v-card
    dark
    class="mx-auto mb-5 rounded-xl"
    max-width="374"
  >
    <router-link
      to="/Estacionamiento"
      style="text-decoration: none; color: inherith"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-container class="rounded-xl">
        <div>
          <v-img
            class="rounded-xl"
            height="200"
            src="../../../assets/img/itl.jpg"
          >
            <div class="info-estacionamiento">
              <p class="info-estacionamiento-text">{{ disponibles }}</p>
            </div>
          </v-img>
        </div>
        <v-card-title class="text-color">{{ Name }}</v-card-title>
        <v-card-subtitle class="text-color">{{ Description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn class="btn-entrar-bg" color="blue">Entrar</v-btn>
        </v-card-actions>
      </v-container>
    </router-link>
  </v-card>
</template>

<script>
import Socket from "@/store/sockets.js";
import { getList } from "../../urls";

export default {
  name: "Cards",
  props: ["Name", "Description"],
  async created() {
    Socket.on("connection");
    const lista = await getList();
    let num = 0;
    lista.forEach(elem=>{
      if(elem.sel)
        num++;
    });
    this.disponibles= `Ocupados: ${num}/${lista.length}`
  },
  data() {
    return {
      disponibles: "Cargando lugares disponibles",
    };
  },
  mounted() {
    Socket.on("Selecciona", (lista) => {
      let num = 0;
      lista.forEach(elem=>{
        if(elem.sel)
          num++;
      })
      this.disponibles= `Ocupados: ${num}/${lista.length}`
    });
  },
};
</script>

<style>
.text-color {
  color: #e5e6ea !important;
}
.info-estacionamiento {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, 0.4);
}
.info-estacionamiento-text {
  color: rgba(229, 230, 234, 1);
}
</style>