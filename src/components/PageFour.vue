<template>
  <div>
    <div class="container-fluid">
      <h4 class="ml-5 mb-3 text-roboto-bold text-color">Dashboard Contratos - ADC</h4>
      <PageFourBanner></PageFourBanner>

      <div class="col-md-12 my-5 fondo">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7 fondo my-3 mr-3 fondo-light">
            <PageFourChart></PageFourChart>
          </div>

          <div class="col-md-4 fondo my-3">
            <div class="row">
              <div class="col-md-12 text-center fondo-light py-3">
                <PageFourPeriodo></PageFourPeriodo>
              </div>
              <div class="d-flex justify-content-center col-md-12 my-4">
                <h6 class="text-roboto-bold color-text text-center">
                  DETALLE GLOBAL CONTRATO
                </h6>
              </div>
              <!-- Por Finalizar -->
              <div class="col-md-4 fondo-light py-3">
                <PageFourFinish></PageFourFinish>
              </div>
              <!-- Por Consumo -->
              <div class="col-md-4  fondo-light py-3">
                <PageFourConsumo></PageFourConsumo>
              </div>
              <!-- Por Presupuesto -->
              <div class="col-md-4 fondo-light py-3">
                <PageFourBudget></PageFourBudget>
              </div>
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
import PageFourBanner from "@/components/PageFourBanner";
import PageFourChart from "@/components/PageFourChart";
import PageFourPeriodo from '@/components/PageFourPeriodo';
import PageFourFinish from '@/components/PageFourFinish';
import PageFourConsumo from '@/components/PageFourConsumo'
import PageFourBudget from '@/components/PageFourBudget'

@Options({
  /* Declara la variable y tipo de datos */

  components: {
    PageFourBanner,
    PageFourChart,
    PageFourPeriodo,
    PageFourFinish,
    PageFourConsumo,
    PageFourBudget
  }
})
export default class PageFour extends Vue {
  data() {
    return {};
  }
}
</script>

<style>
.color-text {
  color: #475b70;
}
.fondo{
  background-color: transparent;
}
.fondo-light{
  background-color: #fff;
  border-radius: 10px;
}
</style>