<template>
    <div id="app">
      <header>
        <!-- Your header content, possibly the Navbar component -->
      </header>
  
      <main>
        <div class="search-container">
          <!-- Search input with button -->
          <input type="text" v-model="searchQuery" placeholder="Busque una receta o ingrediente" class="search-bar">
          <button @click="search" class="search-button">Buscar</button>
        </div>
  
        <section class="popular-recipes">
          <h2>Populares</h2>
          <div class="recipes">
            <div v-for="recipe in popularRecipes" :key="recipe.id" class="recipe-card">
              <img :src="recipe.image" :alt="recipe.name">
              <h3>{{ recipe.name }}</h3>
            </div>
          </div>
        </section>
  
        <section class="suggestions">
          <h2>Sugerencias</h2>
          <div class="recipes">
            <div v-for="recipe in suggestedRecipes" :key="recipe.id" class="recipe-card">
              <img :src="recipe.image" :alt="recipe.name">
              <h3>{{ recipe.name }}</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        popularRecipes: [
          // Populate with your recipe data
        ],
        suggestedRecipes: [
          // Populate with your recipe data
        ]
      }
    },
    methods: {
      search() {
        // Implement your search logic here
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  .search-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .search-bar {
    padding: 10px;
    width: 60%;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .search-button {
    padding: 10px 20px;
    background-color: #7f54db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #1abc9c;
  }
  
  .popular-recipes, .suggestions {
    margin: 40px 0;
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
  }
  
  .recipe-card {
    display: inline-block;
    margin: 0 10px;
    text-align: left;
  }
  
  .recipe-card img {
    width: 100%;
    border-radius: 5px;
  }
  
  h3 {
    margin-top: 5px;
  }
  
  /* Add more styles for other elements and responsive design */
  </style>
  