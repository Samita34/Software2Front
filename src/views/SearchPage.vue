<template>
    <div>
      <!-- Muestra los resultados de la búsqueda -->
      <div v-if="searchResults.length > 0">
        <h2>Resultados de la búsqueda:</h2>
        <div class="search-results-container">
            <div
          class="recipe-card"
          v-for="recipe in searchResults"
          :key="recipe.idMeal"
          @click="goToRecipe(recipe.idMeal)"
        >
        <div class="recipe-image-container">
            <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="recipe-image"/>
          </div>
            <div class="recipe-details">
              <h3>{{ recipe.strMeal }}</h3>
              <div class="ingredients-grid">
                <div v-for="n in 9" :key="`ingredient-${n}-${recipe.idMeal}`" class="ingredient">
                  <span v-if="recipe[`strIngredient${n}`]">{{ recipe[`strIngredient${n}`] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No se encontraron resultados.</p>
      </div>
    </div>
  </template>
  
  
  <script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  props: ['searchQuery'],
  setup(props) {
    const searchResults = ref([]);
    const router = useRouter();

    const fetchResults = async (searchTerm) => {
      if (!searchTerm) {
        return;
      }

      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`);
        searchResults.value = response.data.meals || []; // Manejo cuando no hay resultados
      } catch (error) {
        console.error('Error fetching search results:', error);
        searchResults.value = [];
      }
    };
    const goToRecipe = (idMeal) => {
      router.push({ name: 'resultados', params: { idMeal } });
    };

    // Ejecuta fetchResults cuando el componente se monta
    onMounted(() => fetchResults(props.searchQuery));

    // Reacciona a los cambios en la prop 'searchQuery'
    watch(() => props.searchQuery, fetchResults);

    return {
      searchResults,
      goToRecipe,
    };
  }
};
</script>
<style>
.search-results-container {
  max-width: 800px; /* O el ancho máximo que prefieras */
  margin: 20px auto; /* Agrega 20px de margen en la parte superior e inferior, y auto para los lados */
}

.recipe-card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #fff;
}

.recipe-image-container {
  width: 150px;
  height: 150px;
  overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el contenedor */
  display: flex; /* Permite centrar la imagen en el contenedor */
  justify-content: center; /* Centra la imagen horizontalmente */
  align-items: center; /* Centra la imagen verticalmente */
}

.recipe-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Asegura que la imagen se ajuste al contenedor */
}

.recipe-details {
  margin-left: 20px; /* Espacio entre la imagen y los detalles */
  display: flex;
  flex-direction: column;
}

.ingredients-list {
  list-style-type: none; /* Elimina los estilos de lista predeterminados */
  padding-left: 0; /* Elimina el padding izquierdo */
}

.ingredients-list li {
  margin-bottom: 5px; /* Espacio entre ingredientes */
}
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 10px; /* Espaciado entre columnas y filas */
}

.ingredient {
  padding: 5px; /* Espaciado interno */
  text-align: center; /* Texto centrado */
  /* Elimina los estilos de fondo y borde */
}
</style>