<template>
  <div class="home">
  <!--   <img alt="Vue logo" src="../assets/logo.png"> -->
    <Principal msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import Vue from 'vue';
import Options from 'vue-class-component';
import Principal from '@/components/Principal.vue'; // @ is an alias to /src

@Options({
  components: {
    Principal,
  },
})
export default class Home extends Vue {}
</script>
