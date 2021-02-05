<template>
  <div class="one">
    <PageOne msg="Dashboard Estados de Pago - ADC"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Options from 'vue-class-component';
import PageOne from "@/components/PageOne.vue"; // @ is an alias to /src


@Options({
  components: {
    PageOne,
  },
})
export default class EstadosADC extends Vue {}
</script>