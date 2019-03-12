import VueRouter from 'vue-router'
import Vue from 'vue'

import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import OrderList from './components/OrderList.vue'
import ProductList from './components/ProductList.vue'
import User from './components/Users.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        { path: '/dash', component: Dashboard },
        { path: '/order', component: OrderList },
        { path: '/product', component: ProductList },
        { path: '/users', component: User }
    ]
})
