import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '購物商城'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '購物商城 | 關於'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    meta: {
      title: '購物商城 | 產品'
    },
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      title: '購物商城 | 購物車'
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: '購物商城 | 找不到頁面'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

// 改頁籤名稱
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
