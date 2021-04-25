<template>
  <div>
    <v-card class="px-5">
      <div class="container">
        <center>
          <v-avatar>
            <v-img src="@/assets/img/default-person.png" />
          </v-avatar>
          <v-card-subtitle>
            No has iniciado sesion
            <br />
          </v-card-subtitle>
        </center>
      </div>
    </v-card>
    <v-list nav dense>

      <v-list-item-group>
        <router-link to="/" style="text-decoration: none">
          <v-list-item>
            <v-list-item-title>
              <v-icon style="margin-bottom: 5px">mdi-home</v-icon>
              HOME
            </v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list-item-group>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-list-item-group>
        <router-link to="/login" style="text-decoration: none">
          <v-list-item>
            <v-list-item-title>
              <v-icon style="margin-bottom: 5px">mdi-login-variant</v-icon>
              INICIAR SESION
            </v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "drawer-no-sesion",
};
</script>

<style>
</style>