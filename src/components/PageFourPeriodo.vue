<template>
  <div>
    <p class="text-roboto-bold text-center">EDPS PERIODO ACTUAL</p>
      <vue-table-dynamic :params="params" ref="table" class="p-0 m-0 text-roboto-regular border-sup"></vue-table-dynamic>
      
    </div>
</template>


<script>
import VueTableDynamic from 'vue-table-dynamic';

export default {
  data() {
    return {
      params: {
        data: [
          ["#", "Nombre", "Monto EDP"],
          [10, "Arriendo de Maquinaria", "$1000000"],
          [11, "Pago de trabajadores", "$1200000"],
          [12, "Excavación terreno", "$2000000"]
          
          
        ],
        header: "row",
        border: false,
        stripe: true
      },
    };
  },
  components: { VueTableDynamic }
};
</script>


<style>
.text-smaller {
  font-size: small;
}
.border-sup {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1rem;
}
.fondo{
    background-color: #fff;
}
</style>

