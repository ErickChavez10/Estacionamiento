<template>
  <v-app>
    <navbar />

    <v-container>
      <Cards
        Name="Tec Laguna"
        Description="Estacionamiento del Instituto Tecnologico de la laguna, Cuenta con 4 zonas de estacionamiento, cada una con su respectiva entrada"
      />
    </v-container>
  </v-app>
</template>

<script>
import Cards from "../components/Cards";

import Navbar from '../../../components/navbar/container/navbar';
export default {
  name: "Home",
  components: { Cards, Navbar },
  data: () => ({ }),
};
</script>

<style></style>
