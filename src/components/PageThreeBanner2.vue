<template>
  <div>
    <div class="row fondo-three shadow-sm">
      <div class="col-md-6 border-right">
        <h6 class="text-color text-roboto-bold text-center my-0">Monto Disponible</h6>
        <h4 class="text-color text-roboto-bold text-center">
         $ {{ monto }}
        </h4>
      </div>
      <div class="col-md-6">
        <h6 class="text-color text-roboto-bold text-center my-0">Porcentaje Avance</h6>
        <h4 class="text-color text-roboto-bold text-center">
          {{ avance }} %
        </h4>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monto: Math.floor(Math.random() * (4000000000 - 1000000000)) + 1000000000,
      avance: Math.floor(Math.random()*100),
     
    };
  }
};
</script>
<style>
.fondo-three {
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
}
</style>