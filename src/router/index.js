import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import ProductPage from '../views/CurrentProductPage.vue'
// import AuthPage from '../views/AuthPage.vue'
// import RegPage from '../views/../views/RegPage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'authtorizaton',
  //   component: AuthPage,
  //   meta: {
  //     title: 'Авторизация'
  //   }
  // },
  // {
  //   path: '/registration',
  //   name: 'registr',
  //   component: RegPage,
  //   meta: {
  //     title: 'Регистрация'
  //   }
  // },
  {
    path: '/',
    name: 'products',
    component: MainPage,
    meta: {
      title: 'Продукция'
    }
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage,
    meta: {
      title: 'Корзина'
    }
  },
  {
    path: '/:id',
    name: 'product',
    component: ProductPage,
    meta: {
      title: 'Блюдо'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
