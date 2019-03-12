<template>
    <div>
        <div class="row">
            <h3 class="text-center"> Dashboard </h3>
        </div>

        <div class="row justify-content-start">
            <div class="col-md-4 btn-group-vertical" v-if="this.$store.state.authenticated">
                <router-link to="/users" class="btn btn-secondary mb-1">Users</router-link>
                <router-link to="/order" class="btn btn-secondary mb-1">Orders</router-link>
                <router-link to="/product" class="btn btn-secondary mb-1">Products</router-link>
            </div>
            <div class="col-md-4 btn-group-vertical" v-else>
                <router-link to="/" class="btn btn-primary mb-1">Login</router-link>
            </div>
        </div>

    </div>
</template>
