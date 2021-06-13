<template>
  <v-container class="rounded-lg">

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

    <div v-else-if="zonaSel == 'A'" class="my-5">
      <v-sheet dark color="white" class="border">
        <v-row class="r-container" style="border: 2px solid black; padding: 0">
          <v-col class="pa-0">
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[0].Posicion"
              :piso="datos[0].Piso"
              :zona="datos[0].Zona"
              :sel="datos[0].sel"
              :user="datos[0].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[1].Posicion"
              :piso="datos[1].Piso"
              :zona="datos[1].Zona"
              :sel="datos[1].sel"
              :user="datos[1].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[2].Posicion"
              :piso="datos[2].Piso"
              :zona="datos[2].Zona"
              :sel="datos[2].sel"
              :user="datos[2].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[3].Posicion"
              :piso="datos[3].Piso"
              :zona="datos[3].Zona"
              :sel="datos[3].sel"
              :user="datos[3].user"
            />
          </v-col>
          <v-col class="pa-0" sm="1"></v-col>
          <v-col class="pa-0">
            <v-row no-gutters>
              <v-col>
                <Child
                  @Ocupar="Ocupar"
                  :lugar="datos[4].Posicion"
                  :piso="datos[4].Piso"
                  :zona="datos[4].Zona"
                  :sel="datos[4].sel"
                  :user="datos[4].user"
                />
                <Child
                  @Ocupar="Ocupar"
                  :lugar="datos[5].Posicion"
                  :piso="datos[5].Piso"
                  :zona="datos[5].Zona"
                  :sel="datos[5].sel"
                  :user="datos[5].user"
                />
                <Child
                  @Ocupar="Ocupar"
                  :lugar="datos[6].Posicion"
                  :piso="datos[6].Piso"
                  :zona="datos[6].Zona"
                  :sel="datos[6].sel"
                  :user="datos[6].user"
                />
                <Child
                  @Ocupar="Ocupar"
                  :lugar="datos[7].Posicion"
                  :piso="datos[7].Piso"
                  :zona="datos[7].Zona"
                  :sel="datos[7].sel"
                  :user="datos[7].user"
                />
              </v-col>
              <v-col>
                <Child
                  @Ocupar="Ocupar"
                  :lugar="datos[8].Posicion"
                  :piso="datos[8].Piso"
                  :zona="datos[8].Zona"
                  :sel="datos[8].sel"
                  :user="datos[8].user"
                /><Child
                  @Ocupar="Ocupar"
                  :lugar="datos[9].Posicion"
                  :piso="datos[9].Piso"
                  :zona="datos[9].Zona"
                  :sel="datos[9].sel"
                  :user="datos[9].user"
                /><Child
                  @Ocupar="Ocupar"
                  :lugar="datos[10].Posicion"
                  :piso="datos[10].Piso"
                  :zona="datos[10].Zona"
                  :sel="datos[10].sel"
                  :user="datos[10].user"
                /><Child
                  @Ocupar="Ocupar"
                  :lugar="datos[11].Posicion"
                  :piso="datos[11].Piso"
                  :zona="datos[11].Zona"
                  :sel="datos[11].sel"
                  :user="datos[11].user"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-0" sm="1"></v-col>
          <v-col class="pa-0">
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[12].Posicion"
              :piso="datos[12].Piso"
              :zona="datos[12].Zona"
              :sel="datos[12].sel"
              :user="datos[12].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[13].Posicion"
              :piso="datos[13].Piso"
              :zona="datos[13].Zona"
              :sel="datos[13].sel"
              :user="datos[13].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[14].Posicion"
              :piso="datos[14].Piso"
              :zona="datos[14].Zona"
              :sel="datos[14].sel"
              :user="datos[14].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[15].Posicion"
              :piso="datos[15].Piso"
              :zona="datos[15].Zona"
              :sel="datos[15].sel"
              :user="datos[15].user"
            />
          </v-col>
        </v-row>
      </v-sheet>
    </div>

    <div v-else-if="zonaSel == 'B'" class="my-5">
      <v-sheet dark color="white" class="border">
        <v-row class="r-container" style="border: 2px solid black">
          <v-col class="pa-0">
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[0].Posicion"
              :piso="datos[0].Piso"
              :zona="datos[0].Zona"
              :sel="datos[0].sel"
              :user="datos[0].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[1].Posicion"
              :piso="datos[1].Piso"
              :zona="datos[1].Zona"
              :sel="datos[1].sel"
              :user="datos[1].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[2].Posicion"
              :piso="datos[2].Piso"
              :zona="datos[2].Zona"
              :sel="datos[2].sel"
              :user="datos[2].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[3].Posicion"
              :piso="datos[3].Piso"
              :zona="datos[3].Zona"
              :sel="datos[3].sel"
              :user="datos[3].user"
            />
          </v-col>
          <v-col class="pa-0" sm="1"></v-col>
          <v-col> </v-col>
          <v-col class="pa-0" sm="1"></v-col>
          <v-col class="pa-0">
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[4].Posicion"
              :piso="datos[4].Piso"
              :zona="datos[4].Zona"
              :sel="datos[4].sel"
              :user="datos[4].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[5].Posicion"
              :piso="datos[5].Piso"
              :zona="datos[5].Zona"
              :sel="datos[6].sel"
              :user="datos[6].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[7].Posicion"
              :piso="datos[7].Piso"
              :zona="datos[7].Zona"
              :sel="datos[7].sel"
              :user="datos[7].user"
            />
            <Child
              @Ocupar="Ocupar"
              :lugar="datos[8].Posicion"
              :piso="datos[8].Piso"
              :zona="datos[8].Zona"
              :sel="datos[8].sel"
              :user="datos[8].user"
            />
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <!--
    <div>
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
    -->
  </v-container>
</template>

<script>
// import {Datos} from "../data/datos";
import Socket from "@/store/sockets.js";
import { getList } from "../../urls";
import Dialog from "./dialog.vue";
import Child from "../../otra/child.vue";
export default {
  name: "Sitio",
  props: ["zonaSel"],
  components: { Dialog, Child },
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
    setData(nuevaLista) {
      this.datos = nuevaLista;
    },
    event(a) {
      alert(a);
      // // console.log(localStorage.getItem("@Posicion"));
    },
    Ocupar({ Posicion, Zona, Piso }) {
      console.log(
        "Ocupar 3",
        "[Pos]:" + Posicion,
        "[Zona]" + Zona,
        "[Piso]" + Piso
      );

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
        // Confirma si ya tiene un lugar
        const aux1 = localStorage.getItem("@Posicion")
          ? localStorage.getItem("@Posicion")
          : false;
        const aux2 = localStorage.getItem("@Zona")
          ? localStorage.getItem("@Zona")
          : false;
        const aux3 = localStorage.getItem("@Piso")
          ? localStorage.getItem("@Piso")
          : false;
        console.log("AQUI BRO");
        console.log(
          "\n[Posicion aux]:" + aux1,
          "\n[Posicion]:" + Posicion,
          "\n[Zona]:" + Zona,
          "\n[Zona aux]:" + aux2,
          "\n[Piso]:" + Piso,
          "\n[Piso aux]:" + aux3
        );
        // Si el lugar conincide con el que tiene asignad
        // Quiere decir que va a salir
        if (aux1 == Posicion && Zona == aux2 && Piso == aux3) {
          console.log("QUIERO Salir");
          this.$refs.dialog.salir(
            this.timedate,
            `¿Seguro de salir del estacionamiento?`,
            Posicion,
            Zona,
            Piso,
            this.info.token,
            1
          );

          // console.log("[SALIR]", aux1, Posicion, Zona, aux2, Piso, aux3);
        } else {
          // Si no existe el auxiliar, quiere decir que bi tuebe
          // lugar asignado
          if (!aux1) {
            // console.log("[localstorage]");
            console.log("[ps]", Posicion);
            localStorage.setItem("@Posicion", Posicion);
            localStorage.setItem("@Zona", Zona);
            localStorage.setItem("@Piso", Piso);
            console.log("ALGO");
            this.timedate = new Date();
            // this.countdown(this.timedate);
          }
          Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
        }
      }
    },
    setTime() {
      this.timedate = new Date();
      this.countdown(this.timedate);
      // console.log(this.timedate);
    },
    getRemainingTime(now) {
      now;
      // let deadline = new Date();
      // console.log('[deadline]',deadline)
      // let remainTime = (new Date(deadline) - now + 1000) / 1000;
      // let remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
      // let remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
      // let remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
      // let remainDays = Math.floor(remainTime / (3600 * 24));
      // return {
      //   remainSeconds,
      //   remainMinutes,
      //   remainHours,
      //   remainDays,
      //   remainTime,
      // };
    },
    countdown(deadline) {
      deadline;
      // console.log('[deadline]',deadline)
      // console.log('[t]')
      // this.interval = setInterval(() => {
      //   let t = this.getRemainingTime(deadline);
      //   let res = `Tiempo en uso: ${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
      //   this.timer = res;
      //   this.timedateFinal = t;
      // }, 1000);
    },
    async mostrar() {
      const n = await getList();
      this.datos = n.filter((elem) => elem.Zona == this.zonaSel);
    },
    async exit(Posicion, Zona, Piso) {
      // console.log("PafueraR");

      localStorage.removeItem("@Posicion");
      localStorage.removeItem("@Zona");
      localStorage.removeItem("@Piso");

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
    async salir(Posicion, Zona, Piso) {
      // console.log("PAFUERA");
      Posicion;
      Zona;
      Piso;
      localStorage.removeItem("@Posicion");
      localStorage.removeItem("@Zona");
      localStorage.removeItem("@Piso");
      // console.log(Posicion, Zona, Piso, this.info.token);
      // Socket.emit("Selecciona", Posicion, Zona, Piso, this.info.token);
    },
    costos() {
      const a = this.timer;
      const b = a.split(":");
      const hr = b[1] ? b[1].substr(0, 3) : "";
      const min = b[2] ? b[2].substr(0, 2) : "";

      const c =
        parseInt(hr) * 50 + parseInt(min)
          ? parseInt(hr) * 50 + parseInt(min)
          : "0";
      // console.log(hr, min);
      return `$ ${c}.00`;
    },
  },
  mounted() {
    Socket.on("Selecciona", (lista) => {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } else {
        // this.timedate = new Date();
        // this.countdown(this.timedate);
      }
      // console.log("Nueva lista");
      this.ref = lista.filter((elem) => elem.Zona == this.zonaSel);
      this.datos = this.ref;

      this.setData(this.ref);
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
  border: 1px solid black !important;
}

.cent {
  justify-content: center !important;
  align-items: center !important;
}
</style>
