<template>
  <div>
    <p class="text-roboto-bold p-3 text-center">ANALISIS DE PARTIDA</p>
      <vue-table-dynamic :params="params" ref="table" class="p-0 m-0 text-roboto-regular border-sup"></vue-table-dynamic>
      <vue-table-dynamic :params="params2" ref="table"></vue-table-dynamic>
    </div>
</template>


<script>
import VueTableDynamic from 'vue-table-dynamic';

export default {
  data() {
    return {
      params: {
        data: [
          ["Partida", "Monto USD", "% Avance"],
          ["Items 1", "$80.000", "20%"],
          ["Items 2", "$16.000", "25%"],
          ["Items 3", "$22.000", "15%"],
          ["Items 4", "$14.000", "30%"]
        ],
        header: "row",
        border: false,
        stripe: true
      },
      params2: {
        data: [
          ["Gastos generales", "$30.000", "20%"],
          ["Utilidades", "$20.000", "14%"],
          ["Reajustes", "$100.000", "10%"],
          ["Otros", "$100.000", "32%"]
        ],
        header: false,
        border: false,
        stripe: true,
        
      }
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

</style>