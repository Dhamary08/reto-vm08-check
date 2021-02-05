<template>
  <div class="four">
    <PageFour  msg="Detalle Contrato - ADC"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Options from 'vue-class-component';
import PageFour from "@/components/PageFour.vue"; // @ is an alias to /src


@Options({
  components: {
    PageFour,
  },
})
export default class ContratoADC extends Vue {}
</script>