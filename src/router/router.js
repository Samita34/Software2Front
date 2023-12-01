import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RecipePage from '../views/RecipePage.vue';



const routes = [
    {path: '/home',component: HomePage, name: 'home'},
    {path: '/receta',component: RecipePage, name: 'resultados'},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  