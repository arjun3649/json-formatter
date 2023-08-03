import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/jsoninput',
      name: 'jsoninput',
      component: ()=>import( '../components/Json-Input.vue')
    },
    
  ]
})

export default router
