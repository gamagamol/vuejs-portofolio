
import { createRouter, createWebHistory } from "vue-router";
import ServicesComponent from "../components/ServicesComponent.vue";
import DetailProjectPages from "../pages/DetailProjectPages.vue";
import MainPages from "../pages/MainPages.vue";
import ProjecPages from "../pages/ProjectPages.vue";


const routes = [
    {
        path: "/",
        component:MainPages
    },
  
    {
        path: "/projects",
        component:ProjecPages
    },
    {
        path: "/project/detail/:id",
        component:DetailProjectPages
    },
   
]

const  router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
    
})


export default router