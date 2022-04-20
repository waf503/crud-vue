import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearA from '../components/CrearA.vue'
import ListarA from '../components/ListarA.vue'
import EditarA from '../components/EditarA.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/crear',
    name: 'CrearA',
    component: CrearA
  },
  {
    path: '/editar',
    name: 'EditarA',
    component: EditarA
  },
  {
    path: '/listar',
    name: 'ListarA',
    component: ListarA
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
