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
            <table class="table table-striped table-bordered" v-if="this.users .length > 0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td> {{ user.id }} </td>
                    <td> {{ user.name }} </td>
                    <td> {{ user.email }} </td>
                </tr>

            </tbody>
            </table>
        <p v-else> There's no user </p>
        </div>

         </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            users: {
                type: Object,
                required: true
            }
        }
    },
    created(){
        axios.get('http://localhost:8888/projetos/lara/my-company-ws/public/api/users?token='+this.$store.state.token)
        .then(response => {
            console.log(response)
            this.users = response.data;

            console.log('dados: '  + this.users)
        })
    }
}
</script>

