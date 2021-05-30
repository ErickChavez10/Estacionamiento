<template>
  <v-container class="rounded-lg">
    <v-card-title>{{ timer }}</v-card-title>
    <Dialog ref="dialog" @retorno="retorno" />
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
    Ocupar({ Posicion, Zona, Piso }) {
      const user = this.info;
      if (!user) {
        this.$refs.dialog.openD(
          this.Posicion,
          this.Zona,
          this.Piso,
          "Por favor inicia Sesion",
          ""
        );
      } else {
        this.timedate = new Date();
        this.countdown(this.timedate);
        console.log(this.timedate)
        Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
      }
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
      setInterval(() => {
        let t = this.getRemainingTime(deadline);
        let res = `Tiempo en uso: ${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
          this.timer = res;
      }, 1000);
    },
    async mostrar() {
      const n = await getList();
      this.datos = n.filter((elem) => elem.Zona == this.zonaSel);
    },
    async elminiar() {
      Socket.emit("Selecciona", 1, "A", 1);
    },
    async retorno(name) {
      alert(name);
    },
    async selZonaM() {
      const lista = await getList();
      this.ref = lista.filter((elem) => elem.Zona == this.zonaSel);
      this.datos = this.ref;
    },
  },
  mounted() {
    Socket.on("Selecciona", (lista) => {
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
          res.auto
        );
      } else if (res.status == "existe") {
        this.$refs.dialog.openD(
          res.existe.Posicion,
          res.existe.Zona,
          res.existe.Piso,
          `Ya tienes un lugar asignado`,
          res.auto
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
