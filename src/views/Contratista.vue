<template>
  <div class="one">
    <PageTwo msg="Dashboard Estados de Pago - Contratista"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Options from 'vue-class-component';
import PageTwo from "@/components/PageTwo.vue"; // @ is an alias to /src


@Options({
  components: {
    PageTwo,
  },
})
export default class Contratista extends Vue {}
</script>