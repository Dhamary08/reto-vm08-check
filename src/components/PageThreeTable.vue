<template>
  <div>
    <p class="text-roboto-bold text-left text-color">
      ÚLTIMOS EDPs
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
          ["#", "Nombre", "Contratista", "Monto EDP"],
          [10,"Arriendo de Maquinarua", "Empresa S.A", 100000000],
          [11,"Pago de trabajadores", "Compañía Ltda",120000000 ],
          [12,"Excavación terreno", "Corporación", 220000000]
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
}
</style>

