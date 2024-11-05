<template>
  <div id="app">
  <nav class="navbar">
    <div class="navbar-brand">Menu</div>
    <div class="menu-toggle" id="menu-toggle">☰</div>
    <ul class="navbar-menu">
      <li><router-link to="/calculadora">Calculadora</router-link></li>
      <li><router-link to="/conversor">Conversor de Moeda</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'App'
}; 
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarLinks = document.querySelectorAll('.navbar-menu a');

  menuToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });

  navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbarMenu.classList.remove('active');
    });
  });
});
</script>


