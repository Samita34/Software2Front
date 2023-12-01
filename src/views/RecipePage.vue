<template>
  <div id="app">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <section class="recipe-content">
        <h1>{{ recipeTitle }}</h1>
        <div class="recipe-flex-container">
          <div class="recipe-image">
            <img :src="recipeImage" alt="Imagen del Pique Macho" />
          </div>
          <div class="recipe-details">
            <ul>
              <li v-for="ingredient in ingredients" :key="ingredient.id">
                {{ ingredient.quantity }} {{ ingredient.name }}
              </li>
            </ul>
          </div>
        </div>
        <article class="preparation">
          <h2>Preparación</h2>
          <p v-for="step in preparationSteps" :key="step.id">
            {{ step.description }}
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

  
  <script>
  import NavbarComponent from "../components/NavbarComponent.vue";
  export default {
    name: 'RecipePage',
  components: {
    NavbarComponent,
  },

    data() {
  return {
    recipeTitle: 'Pique Macho',
    recipeImage: require('@/assets/pique-macho-3-FP.jpg'),
    ingredients: [
      { id: 1, name: 'cubos de carne de res', quantity: '500g' },
      { id: 2, name: 'salchichas', quantity: '200g' },
      { id: 3, name: 'cebollas', quantity: '2 medianas' },
      { id: 4, name: 'dientes de ajo', quantity: '3' },
      { id: 5, name: 'papas', quantity: '3 grandes' },
      { id: 6, name: 'tomates', quantity: '2' },
      { id: 7, name: 'locotos o pimientos picantes', quantity: 'al gusto' },
      { id: 8, name: 'comino', quantity: '1 cucharadita' },
      { id: 9, name: 'vinagre', quantity: '1 cucharada' },
      { id: 10, name: 'cerveza', quantity: '1 taza' },
      { id: 11, name: 'pimienta', quantity: 'al gusto' },
      { id: 12, name: 'sal', quantity: 'al gusto' },
      { id: 13, name: 'aceite vegetal', quantity: 'suficiente para freír' }
    ],
    preparationSteps: [
      { id: 1, description: 'En un sartén grande, calentar el aceite a fuego medio.' },
      { id: 2, description: 'Agregar los cubos de carne de res y las salchichas, cocinar hasta que estén dorados.' },
      { id: 3, description: 'Añadir las cebollas y ajo picados al sartén y sofreír hasta que las cebollas estén tiernas y transparentes.' },
      { id: 4, description: 'Incorporar los tomates y locotos picados. Cocinar por unos minutos hasta que los tomates se ablanden.' },
      { id: 5, description: 'Agregar el comino, vinagre y la cerveza a la mezcla en el sartén. Cocinar por unos minutos hasta que el líquido se reduzca y la mezcla esté bien sazonada. Añadir sal y pimienta al gusto.' },
      { id: 6, description: 'En paralelo, freír las papas cortadas en forma de bastones hasta que estén doradas y tiernas.' },
      { id: 7, description: 'Servir el Pique Macho en platos individuales, colocando la mezcla de carne y salchichas sobre las papas fritas y decorando con huevo duro, tomate y perejil picado por encima.' }
    ],
  };
},
  };
  </script>
  
  <style scoped>
  .recipe-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .recipe-flex-container {
    display: flex;
    width: 100%;
  }
  
  .recipe-image {
    flex: 1;
    /* Ajusta el padding según sea necesario para alinear con la lista de ingredientes */
    padding-right: 20px;
  }
  
  .recipe-details ul {
  list-style: none; /* Esto quitará los puntos (bullets) */
  margin: 20; /* Esto quitará el margen por defecto */
  padding: 20;
  padding-right: 20;
  
}

.recipe-details li {
  line-height: 2; /* Ajusta el valor para aumentar el interlineado como desees */
}
  
  /* Asegúrate de que las imágenes no sean demasiado grandes */
  .recipe-image img {
    max-width: 100%;
    height: auto;
  }
  
  /* Estilos adicionales para alinear el contenido como lo necesites */
  </style>
  