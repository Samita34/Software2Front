<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/" class="navbar-logo">CulinaryCraft</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/home">Inicio</a>
        <a class="navbar-item" href="/my-recipes">Mis recetas</a>
        <a class="navbar-item" href="/shopping-list">Lista de compra</a>
        <a class="navbar-item" href="/help">Ayuda</a>
      </div>
      <div class="navbar-end">
        <!-- Additional navbar items can be added here -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  // Component code here
};
</script>

<style scoped>
.navbar {
  background-color: #7f54db; /* A darker shade for more contrast */
  color: white;
  padding: 0.5rem 1rem; /* Reduced padding for a tighter navigation bar */
  display: flex; /* Flexbox layout for better alignment */
  align-items: center; /* Vertically aligns navbar items */
  justify-content: space-between; /* Separates brand and menu items */
}

.navbar-logo {
  font-size: 1.5rem; /* Larger size for the brand logo */
  font-weight: bold; /* Makes the brand logo stand out */
  color: #ecf0f1; /* A light color for the brand logo */
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: white;
  margin-left: 1rem; /* Space out the navbar items */
  padding: 0.5rem 0; /* Padding for clickable area */
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease; /* Transition for hover effect */
}

.navbar-item:hover {
  color: #1abc9c; /* A bright color for hover effect */
}

/* Styles for active link - you can dynamically add a class for the active route */
.navbar-item.active {
  border-bottom: 2px solid #1abc9c; /* Highlight the active menu item */
}

/* Responsive adjustments can be added here */
@media (max-width: 768px) {
  .navbar-menu {
    display: none; /* Hide the navbar menu on smaller screens */
  }

  /* Other responsive adjustments */
}

/* Further styles for additional elements and states */
</style>
