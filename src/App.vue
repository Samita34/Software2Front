<template>
  <div id="app">
    <NavbarComponent /> <!-- Include the Navbar component here -->
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import NavbarComponent from './components/NavbarComponent.vue'; // Import the Navbar component

export default {
  name: 'App',
  components: {
    HomePage,
    NavbarComponent // Register the Navbar component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Add any additional styles for the navbar if necessary */
</style>
