<template>
  <div class="text-center" dark>
    <v-dialog v-model="dialog" width="500" dark>
      <v-card dark>
        <v-card-title class="text-center">
          <!-- <v-btn @click="$emit('retorno','Erick')">Boton</v-btn> -->
          {{ msg }}
        </v-card-title>

        <v-card-text>
          {{ auto }}
        </v-card-text>

        <v-card-text v-if="Zona">
          <v-row>
            <v-col> Zona: {{ Zona }} </v-col>
            <v-col> Piso: {{ Piso }} </v-col>
            <v-col> Lugar: {{ Posicion }} </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn dark class="w-100" outlined text @click="dialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {
      dialog: false,
      Posicion: "",
      Zona: "",
      msg: "",
      auto: "",
      Piso: "",
    };
  },
  methods: {
    openD(Posicion, Zona, Piso, msg, auto) {
      this.Posicion = Posicion;
      this.Zona = Zona;
      this.Piso = Piso;
      this.msg = msg;
      this.auto = auto;
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style>
.w-100 {
  width: 100% !important;
}
</style>