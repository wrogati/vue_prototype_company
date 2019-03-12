<template>
    <div>
        <div class="row justify-content-start">
            <div class="col-md-4 btn-group-vertical" v-if="this.$store.state.authenticated">
                <router-link to="/users" class="btn btn-secondary mb-1">Users</router-link>
                <router-link to="/order" class="btn btn-secondary mb-1">Orders</router-link>
                <router-link to="/product" class="btn btn-secondary mb-1">Products</router-link>
            </div>
            <div class="col-md-4 btn-group-vertical" v-else>
                <router-link to="/" class="btn btn-primary mb-1">Login</router-link>
            </div>
        

            <div class="col-md-8">
                <table class="table table-striped table-bordered" v-if="this.orders.length > 0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.id">
                        <td> {{ order.id }} </td>
                        <td> {{ order.product_name }} </td>
                        <td> {{ order.name }} </td>
                        <td> {{ order.status }} </td>
                    </tr>

                </tbody>
            </table>
            <p v-else> There's no orders </p>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            orders: {
                type: Object,
                required: true
            }
        }
    },
    created(){
        axios.get('http://localhost:8888/projetos/lara/my-company-ws/public/api/order?token='+this.$store.state.token)
        .then(response => {
            console.log(response)
            this.orders = response.data;

            console.log('dados: '  + this.orders)
        })
    }
}
</script>

