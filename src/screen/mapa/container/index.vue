<template>
  <v-app>
    <Toolbar title="Mapa Tec Laguna" back="true" />

    <v-container class="rounded-lg">
      <v-select
        :items="['Mapa', 'Zona A', 'Zona B', 'Zona C', 'Zona D']"
        label="Ver Mapa"
        outlined
        @change="change"
        v-model="sel"
      ></v-select>

      <div class="text-center">
        <h1>{{ sel }}</h1>
      </div>

      <v-img
        class="mt-5 rounded-lg"
        height="300"
        contain
        :src="image"
      >
      </v-img>
    </v-container>
  </v-app>
</template>

<script>
import Toolbar from "../../../components/toolbar";
export default {
  name: "Sitio",
  components: { Toolbar },
  data() {
    return {
      sel: "Mapa",
      a_img: '@/assets/mapa/AMapa.png',
      image: require('@/assets/mapa/AMapa.png')
    };
  },
  methods: {
    Ocupar: (piso, zona) => {
      piso;
      zona;
      console.log(this.datos);
      // console.log(this.datos)
      // alert(`Estas seguro de ocupar el piso ${piso} Zona ${zona}`);
    },
    change(){
      // ../../../assets/mapa/AMapa.png
      // 'Mapa', 'Zona A', 'Zona B', 'Zona C', 'Zona D'
      switch (this.sel) {
        case 'Mapa':
          console.log("[SEL]",this.sel)
          this.image = require('@/assets/mapa/AMapa.png')
          break;
        case 'Zona A':
          console.log("[SEL]",this.sel)
          // this.a_img = '@/assets/mapa/rojo.png'
          this.image = require('@/assets/mapa/rojo.png')
          break;
        case 'Zona B':
          console.log("[SEL]",this.sel)
          // this.a_img = '@/assets/mapa/azul.png'
          this.image = require('@/assets/mapa/azul.png')
          break;
        case 'Zona C':
          console.log("[SEL]",this.sel)
          // this.a_img = '@/assets/mapa/amarillo.png'
          this.image = require('@/assets/mapa/amarillo.png')
          break;
        case 'Zona D':
          console.log("[SEL]",this.sel)
          // this.a_img = '@/assets/mapa/verde.png'
          this.image = require('@/assets/mapa/verde.png')

          break;
      }

      // if(sel=='Mapa'){
      //   this._img = '../../../assets/mapa/AMapa.png'
      // }else if()
    }
  }
};
</script>

<style>
.border {
  border: 1px solid black;
}
</style>