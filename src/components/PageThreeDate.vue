<template>
  <div class="fondo-light shadow-sm py-2">
    <p class="text-center text-roboto-bold text-color my-0">Fechas Generales</p>
    <div class="row">
      <div class="col-md-6 border-right py-2">
          <h6 class="text-roboto-bold text-smaller color-text text-center py-0">Inicio Contrato</h6>
          <h6 class="text-roboto-bold text-smaller color-text text-center my-0 py-0">{{ dateinicio }}</h6>
      </div>
      <div class="col-md-6 py-2">
          <h6 class="text-roboto-bold text-smaller color-text text-center py-0">T&eacute;rmino Contrato</h6>
          <h6 class="text-roboto-bold text-smaller color-text text-center my-0 py-0">{{ datefin }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dateinicio: "01/02/2018",
            datefin: "01/02/2022"
        }
    },
}
</script>