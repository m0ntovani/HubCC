import { createRouter, createWebHistory } from 'vue-router';
import ConversorPage from '../Pages/ConversorPage.vue';
import CalculadoraPage from '../Pages/CalculadoraPage.vue';

const routes = [
  { path: '/', redirect: '/calculadora' }, 
  { path: '/calculadora', name: 'Calculadora', component: CalculadoraPage }, 
  { path: '/conversor', name: 'Conversor', component: ConversorPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
