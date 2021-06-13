<template>
  <v-sheet>
    <Navbar />
    <v-container></v-container>
    <v-container>
        <center>
            <h1>ADMINISTRACION</h1>
        </center>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-btn block @click="modelList = true">Parking</v-btn>
        </v-col>
        <v-col>
          <v-btn block @click="modelList = false">Usuarios</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="modelList">
      <v-card>
        <v-card-title>Bitacora de estacionamiento</v-card-title>
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Auto
                </th>
                <th class="text-left">
                  Entrada
                </th>
                <th class="text-left">
                  Salida
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataParking" :key="item._id">
                <td>
                  <center>
                    {{ item.name }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.email }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.auto }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.timeStart }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.timeEnd }}
                  </center>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card>
        <v-card-title>Usuarios Registrados  

        <v-card-actions >a</v-card-actions>
        </v-card-title>
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Auto
                </th> 
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataUsers" :key="item._id">
                <td>
                  <center>
                    {{ item.name }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.email }}
                  </center>
                </td>
                <td>
                  <center>
                    {{ item.auto }}
                  </center>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
import { getParking, getUsers } from "../urls";

import Navbar from "../../components/navbar/container/navbar.vue";
export default {
  name: "Admin",
  components: { Navbar },
  data() {
    return {
      dataParking: [],
      dataUsers: [],
      modelList: true,
    };
  },
  async created() {
    let ref = await getParking();
    this.dataUsers = await getUsers();
    console.log(this.dataUsers);
    ref.map((elem) => {
      elem.timeEnd = this.format(elem.timeEnd);
      elem.timeStart = this.format(elem.timeStart);
    });
    this.dataParking = ref;
  },
  methods: {
    format(time) {
      if(time){
        const date = new Date(time);
        const hr = date.getHours() < 9? `0${date.getHours()}` : `${date.getHours()}`
        const min = date.getMinutes() < 9? `0${date.getMinutes()}` : `${date.getMinutes()}`
        const sec = date.getSeconds() < 9? `0${date.getSeconds()}` : `${date.getSeconds()}`
        return `${hr}:${min}:${sec} hr`;
      }else{
        return 'Activo';
      }
    },
  },
};
</script>

<style>
.action{
    position: absolute;
    right: 10;;
}
</style>
