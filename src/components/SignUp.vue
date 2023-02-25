<template>
    <!-- <img class="background" src="../assets/background.jpg" /> -->
    <!-- <div v-bind:style='{ backgroundImage: "url("+ background.jpg + ")", }'></div> -->
    <!-- <img class="logo" src="../assets/logo.svg"/> -->
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter username" />
        <input type="text" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password" />

        <button v-on:click="signUp">Sign up</button>
    </div>

    <div class="login-link">
        <p>Already have an account?
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '', 
            email: '', 
            password: ''
        }
    },
    methods: {
        //async because it will return the result a bit late otherwise
        async signUp(){
            let result = await axios.post("http://localhost:3000/users", {
                username: this.username,
                email: this.email,
                password: this.password
            });
            
            console.log(result);
            // 201 = something was created, in this case, a new user
            if(result.status == 201){
                localStorage.setItem("user-credentials", JSON.stringify(result.data));
                this.$router.push({name: 'HomePage'});
            }
        }
    },
    // life-cycle method
    mounted(){
        let user = localStorage.getItem('user-credentials');
        if(user){
            this.$router.push({name: 'HomePage'});
        }
    }
}

</script>

<style>

</style>