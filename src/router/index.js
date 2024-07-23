import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import InputUserView from '../views/user/InputUserView.vue'
import UserView from '../views/user/UserView.vue'
import InputRoomView from '../views/room/InputRoomView.vue'
import RoomView from '../views/room/RoomView.vue'

const routes = [
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
        path: 'user/input',
        name: 'input-user',
        component: InputUserView
      },
      {
        path: 'room',
        name: 'room',
        component: RoomView
      },
      {
        path: 'room/input',
        name: 'input-room',
        component: InputRoomView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
