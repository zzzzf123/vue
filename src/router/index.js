import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegister from '../views/LoginRegister/LoginRegister.vue'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    redirect:'/home/homebody',
    component: Home,
    children:[
      {
        path:'homebody',
        name:'HomeBody',
        component: () => import('../components/Home/HomeBody.vue')
      },{
        path:'itembody',
        name:'ItemBody',
        component: () => import('../components/Home/ItemBody.vue')
      },{
        path:'shoppingcart',
        name:'ShoppingCart',
        component: () => import('../components/Home/ShoppingCart.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'LoginRegister',
    redirect:'/login',
    component: LoginRegister,
    children:[
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/Login/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../components/Login/Register.vue')
      }
    ]
  },

]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
