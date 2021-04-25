<template>
  <div>
    <v-card class="px-5">
      <div class="container">
        <center>
          <v-avatar>
            <v-img src="@/assets/img/default-person.png" />
          </v-avatar>
          <v-card-subtitle>
            Erick Humberto Chavez Mendez
            <br />
            Ford Mustang Gt 2007
          </v-card-subtitle>
        </center>
      </div>
    </v-card>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-title>
            <v-icon style="margin-bottom: 5px">mdi-account-edit</v-icon>
            ACTUALIZAR PERFIL
          </v-list-item-title>
        </v-list-item>

        <router-link to="/" style="text-decoration: none">
          <v-list-item>
            <v-list-item-title>
              <v-icon style="margin-bottom: 5px">mdi-home</v-icon>
              HOME
            </v-list-item-title>
          </v-list-item>
        </router-link>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-list-item>
          <v-list-item-title>
            <v-icon style="margin-bottom: 5px">mdi-logout-variant</v-icon>
            CERRAR SESION
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "drawer-sesion",
};
</script>

<style>
</style>