<template>
  <div>
    <p class="text-roboto-bold  text-center text-smaller">
      Rápido Consumo
    </p>
    <vue-table-dynamic
      :params="params"
      ref="table"
      class="p-0 m-0 text-roboto-regular border-sup"
    ></vue-table-dynamic>
  </div>
</template>


<script>
import VueTableDynamic from "vue-table-dynamic";

export default {
  data() {
    return {
      params: {
        data: [
          ["Nombre", "Fecha"],
          ["Contrato 4", 1000000],
          ["Contrato 5", 1000000],
          ["Contrato 6", 1000000]
        ],
        header: "row",
        border: false,
        stripe: true
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
.fondo {
  background-color: #fff;
  border-radius: 10px;
}
</style>

