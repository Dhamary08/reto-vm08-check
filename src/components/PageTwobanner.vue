<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 p-3 efect-1-cont card-1-contratista d-flex align-items-center mx-2 my-3">
          <h1 class="pr-3">{{ num }}</h1>
          <p>EDPs Pendientes <span class="text-p"> resolver</span></p>
        </div>
        <div class="col-md-2 p-3 efect-2-cont card-2-contratista mx-2 my-3">
          <h5 class="text-center">EDPs Aprobados</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numaprob }}</h2>
        </div>
        <div class="col-md-2 p-3 efect-3-cont card-3-contratista mx-2 my-3">
          <h5 class="text-center">EDPs Rechazados</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numrech }}</h2>
        </div>
        <div class="col-md-2 p-3 efect-4-cont card-4-contratista mx-2 my-3">
          <h5 class="text-center">EDPs Enviados</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numobser }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: Math.floor(Math.random() * (30 - 10)) + 10,
      numaprob: Math.floor(Math.random() * (30 - 10)) + 10,
      numrech: Math.floor(Math.random() * (30 - 10)) + 10,
      numobser: Math.floor(Math.random() * (30 - 10)) + 10
    };
  }
};
</script>

<style>
.card-1-contratista {
  background-color: #e57373;
  border-radius: 10px;
  color: #fff;
}
.efect-1-cont:hover{
  box-shadow: 0 0 3pt 2pt #e57373;
}
.card-2-contratista {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #4dd69e;
  color: #475b70;
}
.efect-2-cont:hover{
  background-color: #4dd69d1f;
}
.card-3-contratista {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #e57373;
  color: #475b70;
}
.efect-3-cont:hover{
  background-color: #e573731a;
}
.card-4-contratista {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #8DDBFE;
  color: #475b70;
}
.efect-4-cont:hover{
  background-color: #8ddafe1e;
}
.text-p {
  font-size: medium;
}
</style>