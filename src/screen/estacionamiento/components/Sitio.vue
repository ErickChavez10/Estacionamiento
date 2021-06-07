<template>
  <v-container class="rounded-lg">
    <v-card-title>{{ timer }}</v-card-title>
    <v-btn @click="event">al</v-btn>
    <Dialog ref="dialog" @retorno="retorno" @exit="exit" />
    <div v-if="datos.length == 0">
      <center>
        <p>CARGANDO</p>
        <v-img
          max-width="400"
          max-height="400"
          src="@/assets/img/loading.gif"
        ></v-img>
      </center>
    </div>
    <div v-else>
      <v-row>
        <v-col
          v-for="n in datos"
          :key="n.Posicion + n.Zona"
          cols="6"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          pill="4"
        >
          <v-card>
            <div v-if="n.sel">
              <v-btn
                v-on:click="Ocupar(n)"
                block
                outlined
                text
                elevation="10"
                class="text-center red lighten-1"
                dark
              >
                Lugar {{ n.Posicion }}<br />Zona {{ n.Zona }}
              </v-btn>
            </div>
            <div v-else>
              <v-btn
                v-on:click="Ocupar(n)"
                block
                outlined
                elevation="10"
                class="text-center success"
                text
                dark
              >
                Lugar {{ n.Posicion }}<br />Zona {{ n.Zona }}
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// import {Datos} from "../data/datos";
import Socket from "@/store/sockets.js";
import { getList } from "../../urls";
import Dialog from "./dialog.vue";

export default {
  name: "Sitio",
  props: ["zonaSel"],
  components: { Dialog },
  data() {
    return {
      datos: [],
      info: null,
      ref: [],
      msg: "",
      interval: null,
      timer: "",
      timedate: null,
      timedateFinal: null,
      counter: false,


    };
  },
  async created() {
    const list = await getList();
    this.datos = list.filter((elem) => elem.Zona == this.zonaSel);
    const info = JSON.parse(localStorage.getItem("@info"));
    this.info = info;
  },
  methods: {
    event(){
      console.log(localStorage.getItem('@posicion'))
    },
    Ocupar({ Posicion, Zona, Piso }) {
      const user = this.info;
      if (!user) {
        this.$refs.dialog.openD(
          this.Posicion,
          this.Zona,
          this.Piso,
          "Por favor inicia Sesion",
          "",
          0
        );
      } else {
        const aux1 = localStorage.getItem('@posicion')? localStorage.getItem('@posicion') : false
        const aux2 = localStorage.getItem('@Zona')? localStorage.getItem('@Zona') : false
        const aux3 = localStorage.getItem('@Piso')? localStorage.getItem('@Piso') : false
        
        if(aux1 == Posicion && Zona == aux2 && Piso == aux3){
          console.log('Salir')
          this.$refs.dialog.salir(
            this.timedateFinal,
            `¿Seguro de salir del estacionamiento?`,
            Posicion, Zona, Piso, this.info.token, 1
          );
          
          console.log('[SALIR]',aux1, Posicion, Zona, aux2, Piso, aux3);
        }else{
          console.log(aux1, Posicion, Zona, aux2, Piso, aux3);

          console.log('SELECCIONA')
          Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
          if(!aux1){
            console.log('[localstorage]')
            localStorage.setItem('@posicion',Posicion)
            localStorage.setItem('@Zona',Zona)
            localStorage.setItem('@Piso',Piso)
          }
        }
      }
    },
    setTime(){
      this.timedate = new Date();
      this.countdown(this.timedate);
      console.log(this.timedate)
    },
    getRemainingTime(now) {
        let deadline = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
        remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime,
      };
    },
    countdown(deadline) {
      this.interval = setInterval(() => {
        let t = this.getRemainingTime(deadline);
        let res = `Tiempo en uso: ${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        this.timer = res;
        this.timedateFinal = t
      }, 1000);
    },
    async mostrar() {
      const n = await getList();
      this.datos = n.filter((elem) => elem.Zona == this.zonaSel);
    },
    async exit(Posicion, Zona, Piso){
      console.log('PafueraR')

      localStorage.removeItem('@posicion');
      localStorage.removeItem('@Zona');
      localStorage.removeItem('@Piso');
      
      Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
    },
    async retorno(name) {
      alert(name);
    },
    async selZonaM() {
      const lista = await getList();
      this.ref = lista.filter((elem) => elem.Zona == this.zonaSel);
      this.datos = this.ref;
    },
    async salir(Posicion, Zona, Piso){
      console.log('PAFUERA')
      localStorage.removeItem('@posicion');
      localStorage.removeItem('@Zona');
      localStorage.removeItem('@Piso');
      console.log( Posicion, Zona, Piso, this.info.token)
      // Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
    },
  },
  mounted() {
    Socket.on("Selecciona", (lista) => {
      if(this.interval){
        clearInterval(this.interval)
        this.interval = null;  
      }else{
        this.timedate = new Date();
        this.countdown(this.timedate);
      }
      this.ref = lista.filter((elem) => elem.Zona == this.zonaSel);
      this.datos = this.ref;
    });

    Socket.on("externo", (res) => {
      if (res.status == "ocupado") {
        this.$refs.dialog.openD(
          this.Posicion,
          this.Zona,
          this.Piso,
          `Ocupado por: ${res.auto}`,
          res.auto,
          0
        );
      } else if (res.status == "existe") {
        this.$refs.dialog.openD(
          res.existe.Posicion,
          res.existe.Zona,
          res.existe.Piso,
          `Ya tienes un lugar asignado`,
          res.auto,
          0
        );
      }
    });
  },
};
</script>

<style>
.border {
  border: 1px solid black;
}

.cent {
  justify-content: center !important;
  align-items: center !important;
}
</style>
