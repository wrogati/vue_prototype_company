<template>
    <div class="text-center">

        <form class="form-signin" @submit.prevent="login">
        <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input 
            type="email" 
            id="inputEmail" 
            class="form-control" 
            placeholder="Email address" 
            required="" 
            v-model="email" 
            autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input 
        type="password" 
        id="inputPassword" 
        class="form-control" 
        placeholder="Password" 
        v-model="password" 
        required="">
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2019-2019</p>
        </form>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "Login",
    data(){
        return {
            email: 'customer@email.com',
            password: '123456'
        }
    },
    methods:{
        login (){
            console.log('email' + this.email)
            axios.post('http://localhost:8888/projetos/lara/my-company-ws/public/api/login', {email: this.email, password: this.password})
            .then(response => {
                console.log(response);
                if (response.data.token != '') {
                    this.$store.state.authenticated = true;
                    this.$store.state.token = response.data.token;
                }
                this.$router.push({ path: '/dash' })
            })
        }
    }

}
</script>
