<template>
  <div>
    <div v-if="sel"
    style="border:1px solid black !important;"
      class="
        border-2
        left
        red
        darken-1
        d-flex
        flex-col
        justify-center
        align-center
      "
      :class="{ red: true }"
      @click="Ocupar(lugar, zona, piso)"
    >
      <div class="text-center">
        Lugar {{ lugar }} <br />
        Zona {{ zona }}
      </div>
    </div>
    <div v-else
      style="border:1px solid black !important;"
      class="
        left
        border-2
        light-green
        darken-1
        d-flex
        flex-col
        justify-center
        align-center
      "
      :class="{ red: true }"
      @click="Ocupar(lugar, zona, piso)"
    >
      <div class="text-center">
        Lugar {{ lugar }} <br />
        Zona {{ zona }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["zona", "lugar", "piso", "sel", "user"],
  created(){
      console.log(this.sel)
  },
  methods: {
    event() {
        this.$emit('eventP2','hola mundo 1')
    },
    Ocupar( Posicion, Zona, Piso ) {
        console.log('Ocupar 1', Posicion, Zona, Piso)
        this.$emit('Ocupar',{Posicion, Zona, Piso})
    }
  },
};
</script>

<style>
.left{
    cursor: pointer;
}
.border{
  border:1px solid black;
}
</style>