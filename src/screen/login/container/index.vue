<template>
  <div>
    <navbar />
      <div style="height:10vh"></div>
    <v-container grid-list-md text-xs-center>
      <v-row>
        <v-col >
          <v-btn class="btn-in" v-on:click="log_res = true"
            >Iniciar Sesion</v-btn
          >
        </v-col>
        <v-col>
          <v-btn class="btn-up" v-on:click="log_res = false">Registrarse</v-btn>
        </v-col>
      </v-row>
      <div class="spacer"></div>
      <v-layout row wrap>
        <v-flex xs12>
          <div v-if="log_res" class="mt-5">
            <Login />
          </div>
          <div v-else>
            <Signup/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import navbar from '../../../components/navbar/container/navbar.vue';
import Login from '../components/login.vue';
import Signup from '../components/signup.vue';
export default {
  components: { navbar, Login, Signup },
  name: "login",
  data() {
    return {
      log_res: !true,
    }; 
  },
};
</script>

<style>
.borderRed {
  border: red 1px solid;
}
.borderBlack {
  border: black 1px solid;
}
.btn-Login {
  background-color: #9ccc65 !important;
  width: 100%;
}
.spacer {
  height: 4vh;
}
.btn-in {
  background: #81d4fa !important;
}
.btn-up {
  background: #ffea00 !important;
}
</style>
