<template>
  <div class="container-fluid margen">
    <h4 class="ml-5 pb-3 text-roboto-bold color-text">Dashboard Estados de Pago - ADC</h4>
    <PageOnebanner></PageOnebanner>
    <div class="col-md-12 my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7 my-3 mr-3 fondo-one" >
          <PageOneChart></PageOneChart>
        </div>
        
        <div class="col-md-4 fondo-one my-3">
          <PageOneTable></PageOneTable>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Options from "vue-class-component";
import PageOnebanner from '@/components/PageOnebanner';
import PageOneChart from '@/components/PageOneChart';
import PageOneTable from '@/components/PageOneTable'

@Options({
 
  components:{
    PageOnebanner,
    PageOneChart,
    PageOneTable
  }
})
export default class PageOne extends Vue {

  data() {
    return {
      
    };
  }
}
</script>



<style>

.fondo-one{
  background-color: #fff;
  border-radius: 10px;
}
.color-text{
  color: #475B70;
}
</style>
