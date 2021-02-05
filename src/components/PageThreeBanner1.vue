<template>
  <div>
    <div class="row fondo-three shadow-sm">
      <div class="col-md-2 border-right">
        <h6 class="text-color text-roboto-bold text-center my-0">#</h6>
        <h4 class="text-color text-roboto-bold text-center">
          {{ numReg }}
        </h4>
      </div>
      <div class="col-md-9 pt-2">
        <div>
          <p class="text-color text-roboto-bold text-left my-0">
            {{ contrato }}
          </p>
        </div>
        <div>
          <h5 class="text-color text-roboto-bold text-left my-0">
            {{ servicio }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numReg: Math.floor(Math.random() * (200 - 100)) + 100,
      contrato: "Nombre de Contrato",
      servicio: "Servicios Faeneros Apertura"
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
.style-four:hover{
 box-shadow: 0 0 3pt 3pt #72717110;
}
</style>