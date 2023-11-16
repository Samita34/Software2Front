<template>
  <div id="app">
    <header>
      <!-- Your header content, possibly the Navbar component -->
    </header>

    <main>
      <div class="search-container">
        <!-- Search input with button -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Busque una receta o ingrediente"
          class="search-bar"
        />
        <button @click="search" class="search-button">Buscar</button>
      </div>

      <section class="popular-recipes">
        <h2>Populares</h2>
        <div class="recipes">
          <div
            v-for="recipe in popularRecipes"
            :key="recipe.id"
            class="recipe-card"
          >
            <img :src="recipe.image" :alt="recipe.name" />
            <h3>{{ recipe.name }}</h3>
          </div>
        </div>
      </section>

      <section class="suggestions">
    <h2>Sugerencias</h2>
    <div class="carousel-container">
      
      <div class="carousel-inner" ref="suggestionsCarouselInner">
        <div
          v-for="(suggestionRecipe, index) in visibleSuggestionRecipes"
          :key="index"
          class="carousel-item"
          ref="suggestionsCarouselItem"
        >
          <img :src="suggestionRecipe.strMealThumb" :alt="suggestionRecipe.strMeal" />
          <h3>{{ suggestionRecipe.strMeal }}</h3>
        </div>
      </div>
      
    </div>
  </section>

      <section class="area-recipes">
        <h2>{{ randomArea }}</h2>
        <div class="carousel-container" ref="carouselContainer">
          <button
            v-if="startIndex > 0"
            @click="scrollCarousel(-1)"
            class="carousel-button prev"
          >
            
          </button>
          <div class="carousel-inner" ref="carouselInner">
            <div
              v-for="(areaRecipe, index) in visibleAreaRecipes"
              :key="index"
              class="carousel-item"
              ref="carouselItem"
            >
              <img :src="areaRecipe.strMealThumb" :alt="areaRecipe.strMeal" />
              <h3>{{ areaRecipe.strMeal }}</h3>
            </div>
          </div>
          <button
            v-if="startIndex < areaRecipes.length - maxVisibleRecipes"
            @click="scrollCarousel(1)"
            class="carousel-button next"
          >
            
          </button>
        </div>
      </section>
      <section class="category-recipes">
        <h2>{{ randomCategory }}</h2>
        <div class="carousel-container" ref="categoryCarouselContainer">
          <button
            v-if="startCategoryIndex > 0"
            @click="scrollCategoryCarousel(-1)"
            class="carousel-button prev"
          >
            
          </button>
          <div class="carousel-inner" ref="categoryCarouselInner">
            <div
              v-for="(categoryRecipe, index) in visibleCategoryRecipes"
              :key="index"
              class="carousel-item"
              ref="categoryCarouselItem"
            >
              <img :src="categoryRecipe.strMealThumb" :alt="categoryRecipe.strMeal" />
              <h3>{{ categoryRecipe.strMeal }}</h3>
            </div>
          </div>
          <button
            v-if="startCategoryIndex < categoryRecipes.length - maxVisibleRecipes"
            @click="scrollCategoryCarousel(1)"
            class="carousel-button next"
          >
            
          </button>
        </div>
      </section>
      <section class="ingredient-recipes">
        <h2>{{ randomIngredient }}</h2>
        <div class="carousel-container" ref="ingredientCarouselContainer">
          <button
            v-if="startIngredientIndex > 0"
            @click="scrollIngredientCarousel(-1)"
            class="carousel-button prev"
          >
            
          </button>
          <div class="carousel-inner" ref="ingredientCarouselInner">
            <div
              v-for="(ingredientRecipe, index) in visibleIngredientRecipes"
              :key="index"
              class="carousel-item"
              ref="ingredientCarouselItem"
            >
              <img :src="ingredientRecipe.strMealThumb" :alt="ingredientRecipe.strMeal" />
              <h3>{{ ingredientRecipe.strMeal }}</h3>
            </div>
          </div>
          <button
            v-if="startIngredientIndex < ingredientRecipes.length - maxVisibleRecipes"
            @click="scrollIngredientCarousel(1)"
            class="carousel-button next"
          >
            
          </button>
        </div>
      </section>
      
    </main>
  <button @click="toggleDarkMode" class="dark-mode-button">Modo Oscuro</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      popularRecipes: [
        // Populate with your recipe data
      ],

      suggestedRecipes: [
        // Populate with your recipe data
      ],
      areaRecipes: [],
      categoryRecipes: [],
      ingredientRecipes: [],
      maxVisibleRecipes: 6,
      startIndex: 0,
      startSuggestionIndex:0,
      startCategoryIndex: 0,
      startIngredientIndex: 0,
      randomArea: "",
      randomCategory: "",
      randomIngredient: "",
    };
  },
  created() {
    this.initAreaRecipes();
    this.initCategoryRecipes();
    this.initIngredientRecipes();
    this.fetchRandomRecipes();
  },
  computed: {
    visibleSuggestionRecipes() {
      return this.suggestedRecipes.slice(
        this.startSuggestionIndex,
        this.startSuggestionIndex + this.maxVisibleRecipes
      );
    },
    visibleAreaRecipes() {
      return this.areaRecipes.slice(
        this.startIndex,
        this.startIndex + this.maxVisibleRecipes
      );
    },
    visibleCategoryRecipes() {
      return this.categoryRecipes.slice(
        this.startCategoryIndex,
        this.startCategoryIndex + this.maxVisibleRecipes
      );
    },
    visibleIngredientRecipes() {
    if (this.ingredientRecipes && this.ingredientRecipes.length > 0) {
      return this.ingredientRecipes.slice(
        this.startIngredientIndex,
        this.startIngredientIndex + this.maxVisibleRecipes
      );
    } else {
      return [];
    }
  },
  },
  methods: {
    async fetchRandomRecipes() {
  try {
    const randomRecipes = [];
    for (let i = 0; i < 6; i++) {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const recipe = data.meals[0]; // Obtener la receta aleatoria

      
        randomRecipes.push(recipe);
      
    }
   
    
    // Ahora tienes un arreglo con las 14 recetas aleatorias en randomRecipes
    console.log(randomRecipes);
    this.suggestedRecipes = randomRecipes;
    // Puedes asignar randomRecipes a un arreglo en tu componente si lo necesitas
  } catch (error) {
    console.error('Error al obtener recetas aleatorias:', error);
  }
},

    async initAreaRecipes() {
  try {
    const randomArea = await this.fetchRandomArea();
    console.log("Área aleatoria seleccionada:", randomArea);
    this.randomArea = randomArea.concat(" food"); // Asigna el área aleatoria a randomArea
    this.fetchAreaRecipes(randomArea);
  } catch (error) {
    console.error('Error al inicializar las recetas del área:', error);
  }
},
    async fetchRandomArea() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();

        // Llama a la función para obtener un área aleatoria y almacénala en una variable
        const randomArea = this.getRandomArea(data);
        return randomArea;
        
      } catch (error) {
        console.error('Error al obtener el área aleatoria:', error);
        return '';
      }
    },

    getRandomArea(areasData) {
      const areas = areasData.meals.map(meal => meal.strArea);
      const randomIndex = Math.floor(Math.random() * areas.length);
      return areas[randomIndex];
    },
    async fetchAreaRecipes(area) {
      try {
        const areaString ="https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(area);
        const response = await fetch(
          areaString
        );
        const data = await response.json();
        this.areaRecipes = data.meals; // Asigna las recetas mexicanas al array areaRecipes
      } catch (error) {
        console.error("Error al obtener las recetas mexicanas:", error);
      }
    },
    async initCategoryRecipes() {
      try {
        const randomCategory = await this.fetchRandomCategory();
        console.log("Categoría aleatoria seleccionada:", randomCategory);
        this.randomCategory = randomCategory;
        this.fetchCategoryRecipes(randomCategory);
      } catch (error) {
        console.error('Error al inicializar las recetas de la categoría:', error);
      }
    },
    async initIngredientRecipes() {
      try {
        const randomIngredient = await this.fetchRandomIngredient();
        console.log("Ingrediente aleatorio seleccionado:", randomIngredient);
        this.randomIngredient = randomIngredient;
        this.fetchIngredientRecipes(randomIngredient);
      } catch (error) {
        console.error('Error al inicializar las recetas del ingrediente:', error);
      }
    },

    async fetchRandomCategory() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        const randomCategory = this.getRandomCategory(data);
        return randomCategory;
      } catch (error) {
        console.error('Error al obtener la categoría aleatoria:', error);
        return '';
      }
    },
    async fetchRandomIngredient() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        const randomIngredient = this.getRandomIngredient(data);
        return randomIngredient;
      } catch (error) {
        console.error('Error al obtener el ingrediente aleatorio:', error);
        return '';
      }
    },

    getRandomCategory(categoriesData) {
      const categories = categoriesData.meals.map(meal => meal.strCategory);
      const randomIndex = Math.floor(Math.random() * categories.length);
      return categories[randomIndex];
    },
    getRandomIngredient(ingredientsData) {
      const ingredients = ingredientsData.meals.map(meal => meal.strIngredient);
      const randomIndex = Math.floor(Math.random() * ingredients.length);
      return ingredients[randomIndex];
    },

    async fetchCategoryRecipes(category) {
      try {
        const categoryString = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await fetch(categoryString);
        const data = await response.json();
        this.categoryRecipes = data.meals;
      } catch (error) {
        console.error('Error al obtener las recetas de la categoría:', error);
      }
    },
    async fetchIngredientRecipes(ingredient) {
      try {
        const ingredientString = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(ingredientString);
        const data = await response.json();
        this.ingredientRecipes = data.meals;
      } catch (error) {
        console.error('Error al obtener las recetas del ingrediente:', error);
      }
    },
    scrollCarousel(direction) {
  const itemsToShow = this.maxVisibleRecipes;
  const itemWidth = this.$refs.carouselItem && this.$refs.carouselItem[0] ? this.$refs.carouselItem[0].offsetWidth + 10 : 0;
  let newStartIndex = this.startIndex;

  if (direction === -1 && (this.areaRecipes || []).length > 0 && this.startIndex > 0) {
    newStartIndex = Math.max(this.startIndex - itemsToShow, 0);
  } else if (
    direction === 1 &&
    (this.areaRecipes || []).length > 0 &&
    this.startIndex + itemsToShow < (this.areaRecipes || []).length
  ) {
    newStartIndex = Math.min(
      this.startIndex + itemsToShow,
      (this.areaRecipes || []).length - itemsToShow
    );
  }

  this.startIndex = newStartIndex;
  if (this.$refs.carouselInner) {
    this.$refs.carouselInner.scrollTo({
      left: newStartIndex * itemWidth,
      behavior: "smooth",
    });
  }
},

scrollCategoryCarousel(direction) {
  const itemsToShow = this.maxVisibleRecipes;
  const itemWidth = this.$refs.categoryCarouselItem && this.$refs.categoryCarouselItem[0] ? this.$refs.categoryCarouselItem[0].offsetWidth + 10 : 0;
  let newStartIndex = this.startCategoryIndex;

  if (direction === -1 && this.categoryRecipes && this.startCategoryIndex > 0) {
    newStartIndex = Math.max(this.startCategoryIndex - itemsToShow, 0);
  } else if (
    direction === 1 &&
    this.categoryRecipes &&
    this.startCategoryIndex + itemsToShow < this.categoryRecipes.length
  ) {
    newStartIndex = Math.min(
      this.startCategoryIndex + itemsToShow,
      this.categoryRecipes.length - itemsToShow
    );
  }

  this.startCategoryIndex = newStartIndex;
  if (this.$refs.categoryCarouselInner) {
    this.$refs.categoryCarouselInner.scrollTo({
      left: newStartIndex * itemWidth,
      behavior: "smooth",
    });
  }
},

scrollIngredientCarousel(direction) {
  const itemsToShow = this.maxVisibleRecipes;
  const itemWidth = this.$refs.ingredientCarouselItem && this.$refs.ingredientCarouselItem[0] ? this.$refs.ingredientCarouselItem[0].offsetWidth + 10 : 0;
  let newStartIndex = this.startIngredientIndex;

  if (direction === -1 && this.ingredientRecipes && this.startIngredientIndex > 0) {
    newStartIndex = Math.max(this.startIngredientIndex - itemsToShow, 0);
  } else if (
    direction === 1 &&
    this.ingredientRecipes &&
    this.startIngredientIndex + itemsToShow < this.ingredientRecipes.length
  ) {
    newStartIndex = Math.min(
      this.startIngredientIndex + itemsToShow,
      this.ingredientRecipes.length - itemsToShow
    );
  }

  this.startIngredientIndex = newStartIndex;
  if (this.$refs.ingredientCarouselInner) {
    this.$refs.ingredientCarouselInner.scrollTo({
      left: newStartIndex * itemWidth,
      behavior: "smooth",
    });
  }
},
toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  },

    search() {
      // Implement your search logic here
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", "Helvetica", "Arial", sans-serif;
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

.popular-recipes,
.suggestions {
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

.area-recipes {
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
  flex: 0 0 calc((100% - (10px * 7)) / 7); /* Ajusta el ancho para 8 elementos teniendo en cuenta el margen */
  margin-right: 20px;
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
.carousel-button:hover,
.carousel-button:focus {
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
.category-recipes {
  margin: 40px 0;
}

/* Estilo para la sección de recetas de ingredientes */
.ingredient-recipes {
  margin: 40px 0;
}

/* Estilo para los botones de la sección de carrusel de categoría */
.carousel-container.category .carousel-button {
  background-color: #7f54db;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  height: 90px;
  top: calc(50% - 25px);
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

/* Estilo para los botones de la sección de carrusel de ingredientes */
.carousel-container.ingredient .carousel-button {
  background-color: #7f54db;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  height: 90px;
  top: calc(50% - 25px);
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.fade-animation {
  animation: fadeEffect 0.4s ease-in-out;
}

@keyframes fadeEffect {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

.dark-mode-button {
  position: fixed;
  left: 10px;
  bottom: 10px;
  padding: 10px 20px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dark-mode-button:hover {
  background-color: #333;
}

body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

body.dark-mode .search-bar
{
  background-color: #333;
  color: white;
  border-color: #444;
}

body.dark-mode .search-button
{
  background-color: #7f54db;
  color: white;
}

body.dark-mode .recipe-card
{
  background-color: #333;
  color: white;
}

body.dark-mode {
  background-color: #121212; /* Fondo oscuro */
  color: #ffffff; /* Letra blanca para el contenido general */
}

body.dark-mode h2,
body.dark-mode h3 {
  color: #e0e0e0; /* Color de letra claro para los encabezados */
}

body.dark-mode .search-bar,
body.dark-mode .search-button,
body.dark-mode .carousel-button {
  background-color: #333; /* Fondo más oscuro para botones y barras de búsqueda */
  color: white; /* Letra blanca para botones y barras de búsqueda */
  border-color: #444;
}


</style>
