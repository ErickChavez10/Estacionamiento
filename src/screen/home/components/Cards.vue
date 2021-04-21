<template>
  <router-link to="/Estacionamiento" style="text-decoration:none">
    <v-card
      dark
      class="mx-auto mb-5 rounded-xl"
      max-width="374"
      v-on:click="click"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-container class="rounded-xl">
        <v-img
          class="rounded-xl"
          height="200"
          src="../../../assets/img/itl.jpg"
        ></v-img>

        <v-card-title>{{ Name }}</v-card-title>

        <v-card-subtitle>{{ Description }}</v-card-subtitle>
      </v-container>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "Cards",
  props: ["Name", "Description"],
  methods: {
    click: () => {
      // alert("Te llevo a otra pantalla bro");
    },
  },
};
</script>

<style>
</style>