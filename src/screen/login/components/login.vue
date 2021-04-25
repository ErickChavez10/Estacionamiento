<template>
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
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="Password"
        v-model="password"
        @click:append="show = !show"
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
</template>

<script>
import { login } from "../../urls";

export default {
    name:'login',
    data() {
    return {
      email: "",
      show: false,
      password: "",
    };
  },
  methods: {
    async btnAccept () {
      const is_email = /.+@.+\..+/.test(this.email);
      if (is_email) {
        const response = await login(
            this.email, this.password
        )
        console.log("[response]",response)
        if(response.status == 'success'){
            // AQUI GUARDAR EL TOKEN Y LO DEMAS
            alert("HAS INICIADO SESION")
        }else{
            // OCURRIO UN ERROR
            alert('LOS DATOS NO COINCIDEN')
            /*
            if(response.msg == 'password_not_match'){
                // ERROR PASSWORD
            }else if(response.msg == 'email_not_match'){
                // ERROR EMAIL
            }
            */
        }
      } else {
        alert("fill all fields");
      }
    },
  },
};
</script>

<style></style>
