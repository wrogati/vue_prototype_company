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
            <table class="table table-striped table-bordered" v-if="this.products .length > 0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td> {{ product.id }} </td>
                    <td> {{ product.name }} </td>
                    <td> $ {{ parseFloat(product.price).toFixed(2) }} </td>
                </tr>

            </tbody>
            </table>
        <p v-else> There's no product </p>
        </div>

         </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            products: {
                type: Object,
                required: true
            }
        }
    },
    created(){
        axios.get('http://localhost:8888/projetos/lara/my-company-ws/public/api/product?token='+this.$store.state.token)
        .then(response => {
            console.log(response)
            this.products = response.data;

            console.log('dados: '  + this.products)
        })
    }
}
</script>

