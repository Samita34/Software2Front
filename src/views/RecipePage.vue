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
  <section class="leave-comment">
  <h2>Deja un comentario</h2>
  <form @submit.prevent="submitComment">
  <div class="rating">
    <span v-for="index in 5" :key="'rating-' + index"
          class="star"
          :class="{ 'rated': newComment.rating >= index }"
          @click="setRating(index)">
          ★
    </span>
  </div>

  <!-- Área de texto para el comentario -->
  <textarea v-model="newComment.text" placeholder="Tu comentario" required></textarea>
  
  <!-- Botón para enviar el comentario -->
  <button type="submit">Enviar comentario</button>
</form>
</section>
  <section class="comments-section">
    <h2>Comentarios</h2>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div class="comment-body">
        <div class="comment-author">{{ comment.author }}</div>
        <div class="comment-rating">
          <!-- Aquí se puede generar las estrellas de calificación basadas en comment.rating -->
          <span v-for="index in 5" :key="index" :class="index <= comment.rating ? 'filled-star' : 'empty-star'">★</span>
        </div>
        <div class="comment-text">{{ comment.text }}</div>
      </div>
    </div>
  </section>
</template>


  <script>
  import axios from 'axios';
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
      ],
      preparationSteps: [
      ],
      comments: [],
      ratings: [],
      newComment: {
        author: '',
        text: '',
        rating: 0,
      },
    };
  },
created() {
    this.fetchComments();
    this.fetchRatings();
  },
  methods: {
    fetchComments() {
      axios.get('http://localhost:8080/api/v1/comentario/listar')
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.error('Hubo un error al obtener los comentarios:', error);
        });
    },
    fetchRatings() {
      axios.get('http://localhost:8080/api/v1/calificacion/listar')
        .then(response => {
          this.ratings = response.data;
        })
        .catch(error => {
          console.error('Hubo un error al obtener las calificaciones:', error);
        });
    },
    submitComment() {
    const commentToSubmit = {
      recetaID: 1, 
      userID: 1, 
      textoComentario: this.newComment.text,
      
    };

    axios.post('http://localhost:8080/api/v1/comentario/crear', commentToSubmit)
      .then(response => {
        this.comments.unshift(response.data);
        this.newComment.text = '';
        this.newComment.rating = 0;
      })
      .catch(error => {
        console.error('Hubo un error al enviar el comentario:', error);
      });
  },

  submitRating() {
    const ratingToSubmit = {
      recetaID: 1, 
      userID: 1, 
      puntuacion: this.newComment.rating, 
    };

    axios.post('http://localhost:8080/api/v1/calificacion/crear', ratingToSubmit)
      .then(response => {
        this.ratings.unshift(response.data);
        this.newComment.rating = 0;
      })
      .catch(error => {
        console.error('Hubo un error al enviar la calificación:', error);
      });
  },
    submitCommentAndRating() {
      this.submitComment();
      this.submitRating();
    },
    setRating(rating) {
      this.newComment.rating = rating;
    },
    
    fetchRecipe() {
      axios.get('http://localhost:8080/api/v1/receta/1') 
        .then(response => {
          const recipeData = response.data;
          this.recipeTitle = recipeData.nombreReceta;
          this.ingredients = recipeData.ingredientes; 
          this.preparationSteps = recipeData.procedimiento;
        })
        .catch(error => {
          console.error('Hubo un error al obtener la receta:', error);
        });
    },
  },
}
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
    padding-right: 20px;
  }
  
  .recipe-details ul {
  list-style: none; 
  margin: 20; 
  padding: 20;
  padding-right: 20;
  
}

.recipe-details li {
  line-height: 2; 
}
  
  .recipe-image img {
    max-width: 100%;
    height: auto;
  }
  
.comments-section {
  width: 100%;
  margin-top: 20px;
}

.comment {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.comment-avatar img {
  width: 50px; 
  height: 50px;
  border-radius: 50%; 
}

.comment-body {
  margin-left: 10px;
}

.comment-author {
  font-weight: bold;
}


.filled-star {
  color: gold;
}

.empty-star {
  color: lightgray;
}

.comment-text {
  margin-top: 5px;
}
.leave-comment {
  margin-top: 20px;
}

.leave-comment input,
.leave-comment textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.leave-comment .rating {
  display: flex;
  justify-content: center;
}

.leave-comment .rating label {
  cursor: pointer;
}

.leave-comment .rating input[type="radio"] {
  display: none;
}

.leave-comment .rating label:before {
  content: '★';
  font-size: 25px;
  color: lightgray;
}

.leave-comment .rating input[type="radio"]:checked + label:before {
  color: gold;
}
.rating .star {
  cursor: pointer;
  font-size: 25px;
  color: lightgray;
}

.rating .rated {
  color: gold;
}
 </style>
  