<template>
    <Header />
    <h1>Hello World! Welcome to the Homepage</h1>
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: 'Home-page',
        components: {
            Header
        },
        mounted(){
        let user = localStorage.getItem('user-credentials');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }
    }
    }
</script>