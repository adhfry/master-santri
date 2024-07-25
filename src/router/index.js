import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/user/UserView.vue'
import RoomView from '../views/room/RoomView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
  path: '/',
  component: MainLayout,
  children: [
    
    {
      path: 'home',
      name: 'home',
      component: HomeView
    },
    {
      path: 'user',
      name: 'user',
      component: UserView
    },
    {
      path: 'room',
      name: 'room',
      component: RoomView
    },
  ]
},]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
})

export default router