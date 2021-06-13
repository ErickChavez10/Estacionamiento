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

        <v-card-text v-if="tipoDialog == 0">
          <v-row>
            <v-col> Zona: {{ Zona }} </v-col>
            <v-col> Piso: {{ Piso }} </v-col>
            <v-col> Lugar: {{ Posicion }} </v-col>
          </v-row>
        </v-card-text>
        <v-card-text v-if="tipoDialog == 1">
          <v-row>
            <!-- <v-col>Monto total: ${{cost}} </v-col> -->
          </v-row>
        </v-card-text>

        <v-card-actions v-if="tipoDialog == 1">
          <v-row>
            <v-col>
              <v-btn dark class="w-100" outlined text @click="exit()">
                Salir
              </v-btn>
            </v-col>
            <v-col>
              <v-btn dark class="w-100" outlined text @click="dialog = false">
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-actions v-else>
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
  name: "Dialog",
  data() {
    return {
      dialog: false,
      Posicion: "",
      Zona: "",
      msg: "",
      auto: "",
      Piso: "",
      final: null,
      cost: null,
      tipoDialog: null,
    };
  },
  methods: {
    exit(){
      this.$emit('exit',this.Posicion, this.Zona, this.Piso);
      this.dialog = false;
    },
    openD(Posicion, Zona, Piso, msg, auto, tipoDialog) {

      this.Posicion = Posicion;
      this.Zona = Zona;
      this.Piso = Piso;
      this.msg = msg;
      this.auto = auto;
      
      this.tipoDialog = tipoDialog;
      this.dialog = !this.dialog;

    },
    salir(final, msg, Posicion, Zona, Piso, token, tipoDialog) {
      // this.cost = parseInt(final.remainHours) * 50 + parseInt(final.remainMinutes) * 5
      this.dialog = !this.dialog;
      this.tipoDialog = tipoDialog;
      
      this.Posicion = Posicion;
      this.Zona = Zona;
      this.Piso = Piso;
      this.token = token;

      this.msg = msg;
      // this.final = final;

    },
  },
};
</script>

<style>
.w-100 {
  width: 100% !important;
}
</style>