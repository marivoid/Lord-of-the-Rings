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
        <p>Already have an account? <a href="youtube.com">Login</a></p>
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
/* .background {
    z-index: -1;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 93.45em;
    height: 47.1em;
} */

.login-link p {
    font-size: small;
}

.login-link a {
    text-decoration: none;
}

.login-link a:link {
    color: black;
    transition: 0.5s;
}

.login-link a:hover {
    color: gold;
    transition: 0.75s;
}

.login-link a:visited {
    color: gold;
    transition: 0.75s;
}

.register {
    margin-top: 14em;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border-radius: 30px;
    border: 0.5px solid rgb(121, 121, 121);
}

.register button {
    width: 280px;
    height: 40px;
    border: none;
    background-color: gold;
    border-radius: 30px;
    cursor: pointer;
}
</style>