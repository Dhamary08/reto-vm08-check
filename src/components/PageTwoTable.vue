<template>
  <div>
    <p class="text-roboto-bold p-3 text-center my-3">LINEAS GENERALES APROBADAS</p>
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
          ["Partida", "Monto USD"],
          ["Items 1", "$200000000"],
          ["Items 2", "$1000000"],
          ["Items 3", "$345000000"],
          ["Items 4", "$20500000"],
          ["Monto Total", "$2345000000"]
          
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

