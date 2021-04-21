<template>
  <v-card flat dark>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar>
            <h1 v-if="back">
              <router-link to="/" style="text-decoration:none">
                <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
              </router-link>
            </h1>
            <v-toolbar-title>
              {{ title }}
            </v-toolbar-title>
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Toolbar",
  props: ["title", "back","to"],
  data: () => ({ 
  }),
};
</script>

<style></style>
