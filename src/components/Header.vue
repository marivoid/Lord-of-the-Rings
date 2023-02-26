<template>
    <div class="nav">
        <a v-on:click="logout" href="#">Logout</a>
        <router-link to="/addTrivia">Trivia</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Header',
        methods: {
            logout(){
                localStorage.clear();
                this.$router.push({name: 'LogIn'});
            }
        }
    }
</script>

<style>
    .nav {
        background-color: black;
        overflow: hidden;
        padding-right: 25px;
    }

    .nav a {
        float: right;
        color: white;
        padding: 30px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-left: 8px;
    }
    .nav a:hover {
        color: lightskyblue;
        transition: 0.5s;
    }
</style>