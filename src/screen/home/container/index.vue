<template>
  <v-app>
    <toolbar title="AppName" />

    <v-container>
      <Cards
        Name="Tec Laguna"
        Description="orem ipsum dolor sit amet, consectetur adipiscing elit. Sed et vulputate enim. Nunc suscipit bibendu"
      />
    </v-container>
  </v-app>
</template>

<script>
import Cards from "../components/Cards";
import Toolbar from "../../../components/toolbar";
export default {
  name: "Home",
  components: { Cards, Toolbar },
  data: () => ({}),
};
</script>

<style></style>
