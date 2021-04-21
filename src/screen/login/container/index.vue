<template>
  <v-container grid-list-md text-xs-center>
    <v-row>
      <v-col>
        <v-btn class="btn-in" v-on:click="log_res = true">Iniciar Sesion</v-btn>
      </v-col>
      <v-col>
        <v-btn class="btn-up" v-on:click="log_res = false">Registrarse</v-btn>
      </v-col>
    </v-row>
    <div class="spacer"></div>
    <v-layout row wrap>
      <v-flex xs12>
        <div v-if="log_res" class="mt-5">
          <v-card>
            <v-card-title>
              <h1>Iniciar Sesion</h1>
            </v-card-title>
            <v-container>
              <v-text-field
                :append-icon="'mdi-email'"
                label="Email"
                placeholder="example@ch.com"
                v-model="email"
              ></v-text-field>
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                label="Password"
                v-model="password"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-container>
            <v-card-actions>
              <v-btn
                depressed
                color="primary"
                class="sm-w-lg btn-Login"
                v-on:click="btnAccept"
              >
                ACCEPT
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div v-else>
          <v-card>
            <v-card-title>
              <h1>Registrarse</h1>
            </v-card-title>
            <v-container>
              <v-text-field
                :append-icon="'mdi-account'"
                label="Nombre"
                placeholder="Erick Chavez"
                v-model="r_name"
              ></v-text-field>

              <v-text-field
                :append-icon="'mdi-car'"
                label="Carro"
                placeholder="Ford Mustang 2006 Negro con blanco"
                v-model="r_mod_auto"
              ></v-text-field>

              <v-text-field
                :append-icon="'mdi-email'"
                label="Email"
                placeholder="example@ch.com"
                v-model="r_email"
              ></v-text-field>

              <v-text-field
                :append-icon="r_show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="r_show2 ? 'text' : 'password'"
                label="Password"
                v-model="r_password"
                @click:append="r_show2 = !r_show2"
              ></v-text-field>
              <v-text-field
                :append-icon="r_show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="r_show3 ? 'text' : 'password'"
                label="Password Confirm"
                v-model="r_password_confirm"
                @click:append="r_show3 = !r_show3"
              ></v-text-field>
            </v-container>
            <v-card-actions>
              <v-btn
                depressed
                color="primary"
                class="sm-w-lg btn-Login"
                v-on:click="btnAccept_r"
              >
                ACCEPT
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { addUser } from "../../urls";
export default {
  name: "login",
  data() {
    return {
      log_res: !true,

      email: "",
      show2: false,
      password: "",

      r_name: "Erick Chavez",
      r_mod_auto: "Ford Mustang 2006",
      r_email: "erick@ch.com",
      r_show2: false,
      r_show3: false,
      r_password: "123",
      r_password_confirm: "123",
    };
  },
  methods: {
    async btnAccept_r() {
    //   alert("Te has registrado");
      const n = await addUser(this.r_name, this.r_mod_auto, this.r_email, this.r_password, this.r_password_confirm);
      console.log(n)
    },
    btnAccept() {
      const n = /.+@.+\..+/.test(this.email);
      if (n) {
        alert("HAS INICIADO SESION");
      } else {
        alert("fill all fields");
      }
    },
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
