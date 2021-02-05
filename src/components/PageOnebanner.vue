<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 p-3 card-1-banner d-flex align-items-center mx-2 my-3 efect-1-banner">
          <h1 class="pr-3">{{ num }}</h1>
          <p>EDPs Pendientes <span class="text-p"> resolver</span></p>
        </div>
        <div class="col-md-2 p-3 card-2-banner efect-2-banner mx-2 my-3">
          <h5 class="text-center">EDPs Aprobados</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numaprob }}</h2>
        </div>
        <div class="col-md-2 p-3 card-3-banner efect-3-banner mx-2 my-3">
          <h5 class="text-center">EDPs Rechazados</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numrech }}</h2>
        </div>
        <div class="col-md-2 p-3 card-4-banner efect-4-banner mx-2 my-3">
          <h5 class="text-center">EDPs Observados</h5>
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
.card-1-banner {
  background-color: #e57373;
  border-radius: 10px;
  color: #fff;
}
.card-2-banner {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #4dd69e;
  color: #475b70;
}
.card-3-banner {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #e57373;
  color: #475b70;
}
.card-4-banner {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #8DDBFE;
  color: #475b70;
}
.text-p {
  font-size: medium;
}

.efect-1-banner:hover{
  box-shadow: 0 0 3pt 2pt #e57373;
}
.efect-2-banner:hover{
  background-color: #4dd69d1f;
}
.efect-3-banner:hover{
  background-color: #e5737313 ;
}
.efect-4-banner:hover{
  background-color: #8ddafe23 ;
}
</style>