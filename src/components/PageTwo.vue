<template>
  <div>
    <div class="container-fluid margen">
      <h4 class="ml-5 pb-3 text-roboto-bold text-color">Dashboard Estados de Pago - Contratista</h4>
      <PageTwobanner></PageTwobanner>
      <div class="col-md-12 my-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7 fondo my-3 mr-3">
            <PageTwoChart></PageTwoChart>
          </div>

          <div class="col-md-4 fondo my-3">
            <PageTwoTable></PageTwoTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Options from "vue-class-component";
import PageTwobanner from '@/components/PageTwobanner';
import PageTwoChart from '@/components/PageTwoChart';
import PageTwoTable from '@/components/PageTwoTable'

@Options({
 
  components:{
    PageTwobanner,
    PageTwoChart,
    PageTwoTable
  }
})
export default class PageTwo extends Vue {

  data() {
    return {
      
    };
  }
}

</script>

<style>
.text-color{
  color: #475B70;
}
</style>