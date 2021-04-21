<template>
  <v-container class="rounded-lg"> 
    <v-row>
      <v-col
        v-for="n in datos"
        :key="n.Posicion"
        cols="6"
        sm="4"
        md="4"
        lg="4"
        xl="4"
        pill="4"
      >
        <v-card>
          <div v-if="n.sel">
            <v-btn
              v-on:click="Ocupar(n.Posicion, n.Zona, n.Piso)"
              block
              outlined
              text
              elevation="10"
              class="text-center red lighten-1"
              dark
            >
              Lugar {{ n.Posicion }}<br />Zona {{ n.Zona }}
            </v-btn>
          </div>
          <div v-else>
            <v-btn
              v-on:click="Ocupar(n.Posicion, n.Zona, n.Piso)"
              block
              outlined
              elevation="10"
              class="text-center success"
              text
              dark
            >
              Lugar {{ n.Posicion }}<br />Zona {{ n.Zona }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row> 
  </v-container>
</template>

<script>
// import {Datos} from "../data/datos";
import Socket from "@/store/sockets.js";
import { getList } from "../../urls";

export default {
  name: "Sitio",
  data() {
    return {
      datos: [],
      ref:[]
    };
  },
  async created() {
    this.datos = await getList();
    console.log("[Datos]",this.datos)
  },
  methods: {
    Ocupar(posicion, zona, piso) {
      // this.datos = SelLugar(posicion, zona, piso, this.datos);  
      Socket.emit("Selecciona", posicion, zona, piso);
    },
    async mostrar() {
      const n = await getList(); 
      this.datos = n;
    },
    async elminiar() {
      Socket.emit("Selecciona", 1, "A", 1);
      // console.log("ELIMINA")
    },
  },
  mounted() {
    Socket.on("Selecciona", (lista)=> {
        this.ref = lista;
        this.datos = this.ref;
    });
  },
};
</script>

<style>
.border {
  border: 1px solid black;
}
</style>
