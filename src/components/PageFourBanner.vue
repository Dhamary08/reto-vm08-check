<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 p-3 efect-1-contrato card-1-contrato mx-2 my-3">
          <h6 class="text-center">Contratos Administrados</h6>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ num }}</h2>
        </div>
        <div class="col-md-2 p-3 efect-2-contrato card-2-contrato mx-2 my-3">
          <h5 class="text-center">Contratos Activos</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numaprob }}</h2>
        </div>
        <div class="col-md-2 p-3 efect-3-contrato card-3-contrato mx-2 my-3">
          <h5 class="text-center">Contratos Inactivos</h5>
          <h2 class="p-0 m-0 text-center text-roboto-bold">{{ numrech }}</h2>
        </div>
        <div class="col-md-2 p-3 efect-4-contrato card-4-contrato mx-2 my-3">
          <h5 class="text-center">Contratos Vencidos</h5>
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
      num: Math.floor(Math.random() * (20 - 1)) + 1,
      numaprob: Math.floor(Math.random() * (15 - 10)) + 10,
      numrech: Math.floor(Math.random() * (20 - 10)) + 10,
      numobser: Math.floor(Math.random() * (9 - 1)) + 1
    };
  }
};
</script>

<style>
.card-1-contrato {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #9fadbb;
  color: #475b70;
}
.efect-1-contrato:hover {
  background-color: #9fadbb1e;
}
.card-2-contrato {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #4dd69e;
  color: #475b70;
}
.efect-2-contrato:hover {
  background-color: #4dd69d1e;
}
.card-3-contrato {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #fbc02d;
  color: #475b70;
}
.efect-3-contrato:hover {
  background-color: #fbc12d13;
}
.card-4-contrato {
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: #e57373;
  color: #475b70;
}
.efect-4-contrato:hover {
  background-color: #e5737310;
}
.text-p {
  font-size: medium;
}
</style>