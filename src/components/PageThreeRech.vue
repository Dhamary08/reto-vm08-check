<template>
    <div class="fondo-light p-2 shadow-sm">
        <p class="text-center text-roboto-bold text-color my-0 text-size-smaller">EDPs Históricos
Rechazados</p>
        <h4 class="text-center text-roboto-bold text-color">{{ Aprobado }}</h4>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Aprobado: Math.floor(Math.random() * (40 - 10)) + 10,
        }
    },
}
</script>

<style>
.text-size-smaller{
    font-size: x-small;
}
</style>