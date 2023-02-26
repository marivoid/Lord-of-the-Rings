<template>
    <Header />
    <h1>Welcome to the Add Trivia page</h1>
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: 'AddTrivia',
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