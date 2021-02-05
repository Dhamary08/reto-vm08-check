<template>
  <div>
    <div class="container-fluid margen">
      <h4 class="ml-5 mb-3 text-roboto-bold text-color">Detalle Contrato - ADC</h4>
      <div class="row d-flex justify-content-center">
        <div class="col-md-5 mr-3 style-four">
          <PageThreeBanner1></PageThreeBanner1>
        </div>
        <div class="col-md-5 style-four">
          <PageThreeBanner2></PageThreeBanner2>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-context-center mt-4">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-12 fondo-light my-4 shawon-sm">
              <PageThreeCharts></PageThreeCharts>
            </div>
            <div class="col-md-12 fondo-light my-4 shawon-sm">
              <PageThreeTable></PageThreeTable>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row mt-4">
            
            <div class="col-md-6">
              <PageThreeAprob></PageThreeAprob>
            </div>
            <div class="col-md-6">
              <PageThreeRech></PageThreeRech>
            </div>
            <div class="col-md-12 mt-3">
              <PageThreeDate></PageThreeDate>
            </div>
            <div class="col-md-12 mt-3">
              <PageThreePerfil></PageThreePerfil>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Options from "vue-class-component";
import PageThreeBanner1 from "@/components/PageThreeBanner1";
import PageThreeBanner2 from "@/components/PageThreeBanner2";
import PageThreeCharts from "@/components/PageThreeCharts";
import PageThreeTable from "@/components/PageThreeTable";
import PageThreeAprob from "@/components/PageThreeAprob";
import PageThreeRech from "@/components/PageThreeRech";
import PageThreeDate from "@/components/PageThreeDate";
import PageThreePerfil from "@/components/PageThreePerfil";

@Options({
  /* Declara la variable y tipo de datos */

  components: {
    PageThreeBanner1,
    PageThreeBanner2,
    PageThreeCharts,
    PageThreeTable,
    PageThreeAprob,
    PageThreeRech,
    PageThreeDate,
    PageThreePerfil
  }
})
export default class PageThree extends Vue {
  data() {
    return {};
  }
}
</script>