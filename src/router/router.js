
import { createRouter,createWebHashHistory } from "vue-router";
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
    }]

const  router = createRouter({
  history: createWebHashHistory(),
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