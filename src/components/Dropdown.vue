<template>
    <nav class="navbar">
      <div class="navbar-brand">Menu</div>
      <div class="menu-toggle" @click="toggleMenu">☰</div>
      <ul class="navbar-menu" :class="{ active: isMenuActive }">
        <li><router-link to="/calculadora" @click.native="closeMenu" class="link-custom">Calculadora</router-link></li>
        <li><router-link to="/conversor" @click.native="closeMenu" class="link-custom">Conversor de Moeda</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Menu",
    data() {
      return {
        isMenuActive: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive;
      },
      closeMenu() {
        this.isMenuActive = false;
      },
    },
  };
  </script>
  
  <style scoped>

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4CAF50;
    color: white;
    position: fixed;
    z-index: 1000;    
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    border-radius: 0.2em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px; 
    font-weight: bold;
  }
  .menu-toggle {
    cursor: pointer;
    font-size: 20px;
  }
  .navbar-menu {
    list-style: none;
    display: none;
    position: absolute;
    width: 100%;
    top: 100%;  
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--foreground);
    padding: 10px;
    border-radius: 0.2em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px; 
    font-weight: bold;
  }
  .navbar-menu.active {
    display: block;
  }
  .navbar-menu li {
    margin: 5px 0;
    text-align: center;
  }
  .link-custom {
  color: white;
  text-decoration: none;
}
  </style>
  