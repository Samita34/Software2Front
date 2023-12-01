import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RecipePage from '../views/RecipePage.vue';
import SearchPage from '../views/SearchPage.vue';


const routes = [
    {path: '/home',component: HomePage, name: 'home'},
    {path: '/receta',component: RecipePage, name: 'resultados'},
    { path: '/search', component: SearchPage, name: 'search-page', props: route => ({ searchQuery: route.query.s }) },
    {
        path: '/receta/:idMeal',
        component: RecipePage,
        name: 'resultados',
        props: true // Esto permite que los parámetros de ruta sean pasados como props al componente
      }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  