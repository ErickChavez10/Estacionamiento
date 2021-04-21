<template>
  <v-container class="mx-5">
    <p>hola</p>
    <p>{{ esc }}</p>
    <v-text-field
      v-model="m_esc"
      :counter="10"
      label="First name"
      required
    ></v-text-field>
    <v-btn v-on:click="event">Soy un boton</v-btn>
  </v-container>
</template>

<script>
import Socket from "@/store/sockets.js";
export default {
  name: "Otra",
  data() {
    Socket.on("escribiendo", (res) => {
      this.esc = res;
    });
    return {
      lista: [],
      esc: "",
      m_esc:''
    };
  },
  async created() {
    console.log("[created]", this.lista);
    fetch("http://192.168.10.197:3000/list")
      .then((res) => res.json())
      .then((data) => (this.lista = data));
  },
  methods: {
    event() {
      Socket.emit("escribiendo",this.m_esc);
      console.log("[event]", this.lista);
      this.m_esc = '';
    },
  },
};
</script>

<style></style>
