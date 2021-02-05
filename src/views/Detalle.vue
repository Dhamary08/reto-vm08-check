<template>
  <div class="three">
    <PageThree msg="Dashboard Contratos - ADC"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Options from 'vue-class-component';
import PageThree from "@/components/PageThree.vue"; // @ is an alias to /src


@Options({
  components: {
    PageThree,
  },
})
export default class Detalle extends Vue {}
</script>