import { createRouter, createWebHistory } from 'vue-router';
import ConversorView from '../views/ConversorView.vue';
import CalculadoraB from '../views/CalculadoraB.vue';

const routes = [
  { path: '/', redirect: '/calculadora' }, 
  { path: '/calculadora', name: 'Calculadora', component: CalculadoraB }, 
  { path: '/conversor', name: 'Conversor', component: ConversorView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
