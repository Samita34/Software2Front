<template>
  <div class="login-container">
    <div class="left-section">
      <div class="illustration">
        <!-- Aquí puedes agregar el SVG o la imagen de la ilustración del cohete -->
      </div>
      <h1>Plan your activities and control your progress online</h1>
    </div>
    
    <div class="right-section">
      <h2>Sign In or Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="fullName" placeholder="Enter your full name">
        <input type="password" v-model="password" placeholder="*******">
        <input type="email" v-model="email" placeholder="Your email goes here">
        <div class="terms">
          <input type="checkbox" v-model="agreeTerms">
          <label>I agree all statements in terms of service</label>
        </div>
        <button type="submit">Sign Up</button>
        <p>I'm already a member</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      fullName: '',
      password: '',
      email: '',
      agreeTerms: false
    };
  },
  methods: {
    handleSubmit() {
      console.log('Submitting form:', this.fullName, this.password, this.email);
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background: #7CCECA;
  color: #464960;
}

.login-container {
  display: flex;
  width: 80%;  
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
  flex: 1; 
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
</style>
