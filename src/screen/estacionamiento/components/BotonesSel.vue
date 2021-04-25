<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <v-col class="pt-2 px-5" cols="12" sm="4" md="4" lg="4" xl="4" pill="4">
        <router-link to="/mapa" style="text-decoration: none">
          <v-btn
            width="100%"
            class="pa-2 my-2 text-center rounded-lg"
            outlined
            tile
            v-on:click="evento"
          >
            <v-icon>mdi-map</v-icon>
            Ver Mapa
          </v-btn>
        </router-link>
      </v-col>

      <v-col class="px-5" cols="12" sm="4" md="4" lg="4" xl="4" pill="4">
        <v-select
          :items="['Zona A', 'Zona B']"
          class="mt-2 text-center rounded-lg"
          label="Seleccionar Zona"
          v-model="zonaSel"
        ></v-select>
      </v-col>
      
      <v-col class="pt-1 px-5" cols="12" sm="4" md="4" lg="4" xl="4" pill="4">
        <v-select
          :items="['Piso 1', 'Piso 2']"
          class="text-center rounded-lg"
          label="Seleccionar Piso"
          v-model="pisoSel"
        ></v-select>
      </v-col>
    </v-row>
    <div class="separador text-center mt-5 pt-1">
      <p class="text">{{ zonaSel }} - {{ pisoSel }}</p>
    </div>
  </v-container>
</template>

<script>
import Socket from "@/store/sockets.js";

export default {
  name: "BotonesSel",
  data() {
    Socket.on("connection");
    return {
      zonaSel: "Zona A",
      pisoSel: "Piso 1",
    };
  },
  methods: {
    evento() {},
  },
};
</script>

<style>
.border {
  border: 1px solid black;
}
.center-to {
  justify-content: center;
  align-items: center;
}
</style>
