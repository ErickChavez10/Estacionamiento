<template>
  <div class="text-center" dark>
    <v-dialog v-model="dialog" width="500" dark>
      <v-card dark>
        <v-card-title class="text-center"> ALERT </v-card-title>

        <v-card-text> ¿Estas seguro de salir del estacionamiento? </v-card-text>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn @click="salir">Si</v-btn>
            </v-col>
            <v-col>
              <v-btn @click="cancelar">No</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      dialog: false,
      lib: null,
    };
  },
  methods: {
    event(){
      console.log('lib')
      this.dialog = !this.dialog;
    },
    salir(){
      this.dialog = !this.dialog
    },
    cancelar(){
      this.dialog = !this.dialog
    }
  },
};
</script>

<style>
.w-100 {
  width: 100% !important;
}
</style>