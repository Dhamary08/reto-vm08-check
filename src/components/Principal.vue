<template>
  <div class="hello">
    <!--    <h1>{{ msg }}</h1> -->
    <!-- Información principal -->
    <div class="container-fluid shadow-sm px-0">
      <div class="row d-flex justify-content-center py-2 fondo-light">
        <div class="col-md-2 mr-3 fondo-light p-3 my-1 text-roboto-bold mov-color-princ">
          <p></p>
          <p class="text-center p-0 m-0">MUSD$ <span class="text-big"> {{ numUSD }} </span></p>
        </div>
        <div
          class="col-md-2 mr-3 p-3 text-center my-1 text-roboto-bold border-left mov-color-princ"
        >
          <p class="my-0 text-roboto-bold text-center text-p">Plazo</p>
          <h6 class="my-0 text-roboto-bold text-center">{{ meses }} MESES</h6>
          <p class="my-0 text-roboto-bold text-center text-p">
            ENE {{ yypast }} - DIC {{ yytoday }}
          </p>
        </div>
        <div class="col-md-2 my-1 mr-3 p-3 text-roboto-bold border-left mov-color-princ">
          <p></p>
          <p class="my-0 text-roboto-bold text-center text-p">MONTO GASTADO</p>
          <p class="my-0 text-roboto-bold text-center"><span class="text-p">MUSD$ </span>{{ numgasto }}</p>
        </div>
        <div class="col-md-2 my-1 p-3 mr-3 text-roboto-bold border-left mov-color-princ">
          <p></p>
          <p class="my-0 text-roboto-bold text-center text-p">AVANCE TEMPORAL</p>
          <p class="my-0 text-roboto-bold text-center">
            {{ mesesTemporal }} Meses
          </p>
        </div>
        <div class="col-md-2 my-1 p-3 mr-3 text-roboto-bold border-left mov-color-princ">
          <p></p>
          <p class="my-0 text-roboto-bold text-center text-p">Cantidad de EDPs</p>
          <p class="my-0 text-roboto-bold text-center">{{ edp }}</p>
        </div>
      </div>
    </div>

    <!-- AVANCE FINANCIERO + ACELERACION + ESTIMACION CIERRE -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center pt-5">
        <div class="col-md-3 fondo-light mr-3 py-3 mt-3 mov-color">
          <p class="text-roboto-bold text-center ">AVANCE FINANCIERO</p>
          <div class="d-flex align-items-center justify-content-center">
            <img
              src="/assets/img/dollar.svg"
              alt=""
              class="img-dollar mr-2"
            /><samp class="text-size text-roboto-bold"
              >{{ porcentajeAvance }}%</samp
            >
          </div>
          <p class="text-roboto-regular text-center  mt-2 mb-0">
            Real: MUSD $ {{ numgasto }}
          </p>
          <p class="text-roboto-regular text-center my-0">
            Total: MUSD $ {{ numUSD }}
          </p>
        </div>
        <div class="col-md-3 fondo-light mr-3 py-3 mt-3 mov-color">
          <p class="text-roboto-bold text-center">ACELERACION</p>
          <div class="d-flex align-items-center justify-content-center">
            <img
              src="/assets/img/yellow-chart.svg"
              alt=""
              class="img-dollar mr-2"
            /><samp class="text-size text-roboto-bold"
              >{{ porcentajeAce }}%</samp
            >
          </div>
          <p class="text-roboto-regular text-center  mt-2 mb-0">
            Real: MUSD $ {{ numgasto }}
          </p>
          <p class="text-roboto-regular text-center my-0">
            Total: MUSD $ {{ numUSD }}
          </p>
        </div>
        <div class="col-md-3 fondo-light py-3 mt-3 mov-color">
          <p class="text-roboto-bold text-center">
            ESTIMACI&Oacute;N DE CIERRE
          </p>
          <div class="">
            <p class="text-roboto-regular text-center my-0">
              Mes Estimado de Cierre:
            </p>
            <p class="text-roboto-bold text-center my-0">{{ mmyy }}</p>
            <p class="text-roboto-regular text-center my-0">
              Aceleraci&oacute;n Estimada:
            </p>
            <p class="text-roboto-bold text-center my-0">{{ mm }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gráfico y Tabla -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center pt-4">
        <!-- Grafico -->
        <div class="col-md-7 fondo-light my-4 mr-3">
          <Chart2line></Chart2line>
        </div>
        <!-- Tabla -->
        <div class="col-md-4 fondo-light my-4">
          <AnalisisPartida> </AnalisisPartida>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Options from "vue-class-component";
import Chart2line from "@/components/Chart2line.vue";
import AnalisisPartida from "@/components/AnalisisPartida.vue";

@Options({
  /* Declara la variable y tipo de datos */
  /* props: {
    numUSD: Number,
    meses: Number,
    numgasto: Number,
    mesesTemporal: Number,
    edp: Number,
    porcentajeAvance: Number,
    porcentajeAce: Number,
    mmyy: String,
    mm: String,
    yypast: Number,
    yytoday: Number
  }, */
  components: {
    Chart2line,
    AnalisisPartida
  }
})
export default class Principal extends Vue {
  numUSD!: number;
  meses!: number;
  numgasto!: number;
  mesesTemporal!: number;
  edp!: number;
  porcentajeAvance!: number;
  porcentajeAce!: number;
  mmyy!: string;
  mm!: string;
  yypast!: number;
  yytoday!: number;

  data() {
    return {
      numUSD: Math.floor(Math.random() * (30 - 10)) + 10,
      meses: Math.floor(Math.random() * (36 - 1)) + 36,
      numgasto: Math.floor(Math.random() * (10 - 5)) + 1,
      mesesTemporal: Math.floor(Math.random() * (36 - 1)) + 36,
      edp: Math.floor(Math.random() * (18 - 1)) + 18,
      porcentajeAvance: Math.floor(Math.random() * (100 - 1)) + 1,
      porcentajeAce: Math.floor(Math.random() * (100 - 1)) + 1,
      mmyy: "OCTUBRE 2021",
      mm: "2 MESES",
      yypast: 2019,
      yytoday: 2020
    };
  }
}
</script>
 flex
<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textsmaller {
  font-size: x-small;
}
.text-size {
  font-size: 1.8rem;
}
.text-big{
  font-size: 1.3rem;
}
.img-dollar {
  width: 40px;
  height: 40px;
}
.fondo-light {
  background-color: #ffffff;
  border-radius: 10px;
}
.text-p {
  font-size: small;
}

.mov-color:hover{
  box-shadow: 0 0 3pt 2pt #a2d3f3;

}
.mov-color-princ:hover{
  outline: double;
  outline-color: #3585bb31;
  outline-style: ridge;
  outline-width: 3px;
}
</style>