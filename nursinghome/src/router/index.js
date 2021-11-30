import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ONama from '../views/ONama.vue'
import Usluge from '../views/Usluge.vue'
import Ishrana from '../views/Ishrana.vue'
import Galerija from '../views/Galerija.vue'
import Kontakt from '../views/Kontakt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onama',
    name: 'Onama',
    component: ONama
  },
  {
    path: '/usluge',
    name: 'Usluge',
    component: Usluge
  },
  {
    path: '/ishrana',
    name: 'Ishrana',
    component: Ishrana
  },
  {
    path: '/galerija',
    name: 'Galerija',
    component: Galerija
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `Dom za stare | Klisaric Dom`;
  next();
});

export default router
