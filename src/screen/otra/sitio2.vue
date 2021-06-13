<template>
  <v-sheet dark>
    <v-row class="r-container">
      <v-col>
        <div
          class="left light-green darken-1 d-flex flex-col justify-center align-center"
          @click="click"
        >
          <div class="text-center">Lugar 1 <br> Zona A</div>
        </div>
        <div
          class="left light-green darken-1 d-flex flex-col justify-center align-center"
          @click="click"
        >
          <div class="text-center">Lugar 2 <br> Zona A</div>
        </div>
        <div
          class="left light-green darken-1 d-flex flex-col justify-center align-center"
          @click="click"
        >
          <div class="text-center">Lugar 3 <br> Zona A</div>
        </div>
        <div
          class="left light-green darken-1 d-flex flex-col justify-center align-center"
          @click="click"
        >
          <div class="text-center">Lugar 4 <br> Zona A</div>
        </div>
      </v-col>
      <v-col></v-col>

      <v-col>
        <v-row no-gutters>
          <v-col>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 5 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 6 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 7 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 8 <br> Zona A</div>
            </div>
          </v-col>
          <v-col>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 9 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 10 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 11 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 12 <br> Zona A</div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
      <v-col>
        <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 13 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 14 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 15 <br> Zona A</div>
            </div>
            <div
              class="left light-green darken-1 d-flex flex-col justify-center align-center"
              @click="click"
            >
              <div class="text-center">Lugar 16 <br> Zona A</div>
            </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "Otra",
  methods: {
    click() {
      alert("A");
    },
  },
};
</script>
<style>

.left:hover {
  background: #a10f0f;
}
.left {
  border: 1px solid black!important;
  margin:1px; 
  height: 5vh;
}
.r-container {
  background: #cdcdce;
}
</style>