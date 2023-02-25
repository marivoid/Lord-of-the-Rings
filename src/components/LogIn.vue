<template>
    <h1>Login in</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password" />

        <button v-on:click="login">Login</button>
    </div>

    <div class="login-link">
        <p>Don't have an account?
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );

            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-credentials", JSON.stringify(result.data[0]));
                this.$router.push({name: 'HomePage'});
            }
            console.log(result);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-credentials');
        if(user){
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>