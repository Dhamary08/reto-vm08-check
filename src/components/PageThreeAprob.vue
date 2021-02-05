<template>
  <div class="fondo-light p-2 shadow-sm">
    <h6
      class="text-center text-roboto-bold text-color my-0 text-size-small margen-pad"
    >
      EDPs Aprobados
    </h6>
    <h4 class="text-center text-roboto-bold text-color">{{ Aprobado }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Aprobado: Math.floor(Math.random() * (40 - 10)) + 10
    };
  }
};
</script>

<style>
.text-size-small {
  font-size: small;
}
.margen-pad {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>