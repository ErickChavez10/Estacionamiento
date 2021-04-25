<template>
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
    <v-btn @click="getToken">GET</v-btn>
  </v-card>
</template>

<script>
import { addUser } from "../../urls";

export default {
  name: "signup",
  data() {
    return {
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
      const response = await addUser(
        this.r_name,
        this.r_mod_auto,
        this.r_email,
        this.r_password,
        this.r_password_confirm
      );
      if(response.status == "success"){
        // SE HA REGISTRADO
        alert("TE HAS REGISTRADO")
      }else{
        // HA OCURRIDO UN ERROR
        if(response.msg == 'user_exist'){
          alert("EL EMAIL YA EXISTE")
        }else if(response.msg == 'no_match'){
          alert('LAS CONTRASEÑAS NO COINCIDEN')
        }else{
          alert('COMPLETE LOS CAMPOS')
        }
      }
      console.log("[sign]",response);
    },
    async getToken(){
        const tkn = this.$store.state.token;
        console.log("[token]",tkn)
    },
  },
};
</script>

<style>
</style>