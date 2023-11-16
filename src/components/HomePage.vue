<template>
    <div id="app">
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

        <section class="mexican-recipes">
        <h2>Mexican</h2>
        <div class="carousel-container" ref="carouselContainer">
          <button v-if="startIndex > 0" @click="scrollCarousel(-1)" class="carousel-button prev">‹</button> <!-- Botón izquierdo -->
  <div class="carousel-inner" ref="carouselInner">
    <div v-for="(mexicanRecipe, index) in visibleMexicanRecipes" :key="index" class="carousel-item" ref="carouselItem">
      <img :src="mexicanRecipe.strMealThumb" :alt="mexicanRecipe.strMeal">
      <h3>{{ mexicanRecipe.strMeal }}</h3>
    </div>
  </div>
  <button v-if="startIndex < (mexicanRecipes.length - maxVisibleRecipes)" @click="scrollCarousel(1)" class="carousel-button next">›</button> <!-- Botón derecho -->
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
        ],
        mexicanRecipes: [],
        maxVisibleRecipes: 5,
      startIndex: 0,
      }
    },
    created() {
  this.fetchMexicanRecipes();
},
computed: {
    visibleMexicanRecipes() {
      return this.mexicanRecipes.slice(this.startIndex, this.startIndex + this.maxVisibleRecipes);
    },
  },
    methods: {
      async fetchMexicanRecipes() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican');
      const data = await response.json();
      this.mexicanRecipes = data.meals; // Asigna las recetas mexicanas al array mexicanRecipes
    } catch (error) {
      console.error('Error al obtener las recetas mexicanas:', error);
    }
  },
  scrollCarousel(direction) {
    const itemsToShow = this.maxVisibleRecipes;
  // const totalScrollWidth = this.$refs.carouselInner.scrollWidth; // Elimina esta línea
  const itemWidth = this.$refs.carouselItem[0].offsetWidth + 10; // Asumiendo que el margen derecho es de 10px
  let newStartIndex = this.startIndex;
  
  if (direction === -1 && this.startIndex > 0) {
    newStartIndex = Math.max(this.startIndex - itemsToShow, 0);
  } else if (direction === 1 && this.startIndex + itemsToShow < this.mexicanRecipes.length) {
    newStartIndex = Math.min(this.startIndex + itemsToShow, this.mexicanRecipes.length - itemsToShow);
  }

  this.startIndex = newStartIndex;
  this.$refs.carouselInner.scrollTo({
    left: newStartIndex * itemWidth,
    behavior: 'smooth'
  });
  this.addAnimationClass();
},
addAnimationClass() {
    const carouselItems = this.$refs.carouselInner.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
      item.classList.add('fade-animation');
    });
    setTimeout(() => {
      carouselItems.forEach(item => {
        item.classList.remove('fade-animation');
      });
    }, 500); // Asegúrate de que este tiempo coincida con la duración de tu animación
  },


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
  margin: 0 20px; /* Aumenta el valor de los márgenes laterales */
  text-align: left;
  padding-bottom: 20px; /* Agrega un margen en la parte inferior */
}
  
  .recipe-card img {
    width: 100%;
    border-radius: 5px;
  }
  
  h3 {
    margin-top: 5px;
  }
  
  .mexican-recipes {
  margin: 40px 0;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  justify-content: start; /* Asegúrate de que los elementos estén alineados al inicio */
}

.carousel-inner {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center; /* Centra los elementos horizontalmente */
}


.carousel-item {
  flex: 0 0 calc((100% - (10px * 7)) / 6); /* Ajusta el ancho para 8 elementos teniendo en cuenta el margen */
  margin-right: 30px;
  scroll-snap-align: start;
}

.carousel-item img {
  width: 100%;
  height: auto; /* Mantiene la relación de aspecto */
  border-radius: 5px;
}

.carousel-container {
  position: relative;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  background-color: #7f54db; /* Añade el color de fondo de tu preferencia */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  height: 90px; /* Ajusta al tamaño que prefieras */
  top: calc(50% - 25px);
  transform: translate(-50%, -50%); 
  transition: opacity 0.3s ease;
}
.carousel-button:hover, .carousel-button:focus {
  opacity: 0.8; /* Cambia la opacidad cuando se pasa el mouse o se enfoca */
}

.carousel-button.prev {
  left: 0; /* Ajusta si quieres cambiar la posición del botón izquierdo */
  transform: translate(0, -50%);
}

.carousel-button.next {
  right: 0; /* Ajusta si quieres cambiar la posición del botón derecho */
  transform: translate(0, -50%);
}

.fade-animation {
  animation: fadeEffect 0.4s ease-in-out;
}

@keyframes fadeEffect {
  from { opacity: 1; }
  to { opacity: 0.5; }
}

   </style>
  