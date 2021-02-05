import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import EstadosADC from '../views/EstadosADC.vue'
import Home from '../views/Home.vue'
import Contratista from '../views/Contratista.vue'
import Detalle from '../views/Detalle.vue'
import ContratoADC from '../views/ContratoADC.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estadosadc',
    name: 'EstadosADC',
    component: EstadosADC 
  },
  {
    path: '/Contratista',
    name: 'Contratista',
    component: Contratista 
  },
  {
    path: '/Detalle',
    name: 'Detalle',
    component: Detalle
  },
  {
    path: '/ContratoADC',
    name: 'ContratoADC',
    component: ContratoADC
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
