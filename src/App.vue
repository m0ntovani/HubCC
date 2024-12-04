<template>
  <div id="app">
    <Dropdown />
    <router-view></router-view>
  </div>
</template>

<script>
import Dropdown from './components/Dropdown.vue';

export default {
  name: "App",
  components: {
    Dropdown,
  },
};
</script>
