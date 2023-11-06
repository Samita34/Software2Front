<template>
  <div class="login-container">
    <div class="left-section">
      <div class="illustration">
        <!-- Aquí puedes agregar el SVG o la imagen de la ilustración del cohete -->
      </div>
      <h1>Plan your activities and control your progress online</h1>
    </div>
    
    <div class="right-section">
      <!-- Agregar los botones Login y Sign Up aquí -->
      <div class="buttons">
        <button class="minimal-button" @click="showLogin" :disabled="showLoginForm">Login</button>
        <button class="minimal-button" @click="showSignUp" :disabled="!showLoginForm">Sign Up</button>
      </div>
      <div class="form-container">
        <transition name="carousel-slide" mode="out-in">
          <form :key="formKey" @submit.prevent="handleFormSubmit" class="slide-form">
            <!-- Campos de inicio de sesión o registro -->
            <input type="text" v-model="fullName" placeholder="Enter your full name">
            <input type="password" v-model="password" placeholder="*******">
            <input v-if="showSignUpForm" type="password" v-model="confirmPassword" placeholder="Confirm Password">
            <button type="submit">{{ showSignUpForm ? 'Sign Up' : 'Login' }}</button>
          </form>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      showLoginForm: true, // Estado para mostrar el formulario de inicio de sesión
      fullName: '',
      password: '',
      confirmPassword: '', // Campo de confirmación de contraseña
      formKey: 'login',
    };
  },
  computed: {
    showSignUpForm() {
      return !this.showLoginForm;
      
    },

    
  },
  methods: {
    showLogin() {
      if (!this.showLoginForm) {
        this.showLoginForm = true;
        this.formKey = 'login';
      }
    },
    showSignUp() {
      if (this.showLoginForm) {
        this.showLoginForm = false;
        this.formKey = 'signup';
        // Establecer la clave para la animación de deslizamiento
      }
    },
    handleFormSubmit() {
      if (this.showSignUpForm) {
        // Lógica para manejar el registro
      } else {
        // Lógica para manejar el inicio de sesión
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para tu componente */
body {
  font-family: 'Arial', sans-serif;
  background: #7CCECA;
  color: #464960;
}

.login-container {
  display: flex;
  width: 70%;  
  height: 70vh; 
  margin: auto;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0; 
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.left-section {
  flex: 1.5;
  background: #007566;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #D1D1D9;
}

.right-section {
  flex: 1.2; 
  background: #D1D1D9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input[type="text"], input[type="password"], input[type="email"] {
  width: 100%;
  border: none;
  border-bottom: 2px solid #464960; 
  background: transparent;
  padding: 5px 0;
  font-size: 18px;
  margin-bottom: 20px;
  color: #464960;
  transition: border-color 0.3s, transform 0.3s; 
  outline: none; 
}

input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus {
  border-bottom-color: #FB8561;
  transform: scale(1.05);  /* Aumenta un poco el tamaño del input al enfocarse */
}

.terms {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  color: #007566;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #FB8561;
  color: #D1D1D9;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.minimal-button {
  background: transparent;
  border: none;
  font-size: 18px;
  color: #007566;
  cursor: pointer;
}

.minimal-button:hover {
  text-decoration: underline;
}

.form-container {
  overflow: hidden; /* Para ocultar cualquier contenido que se desborde */
}

.carousel-slide-enter-active, .carousel-slide-leave-active {
  transition: all 0.5s ease;
}

.carousel-slide-enter, .carousel-slide-leave-to {
  transform: translateX(-100%); /* Comienza fuera del contenedor (a la izquierda) */
  opacity: 0;
}
</style>
