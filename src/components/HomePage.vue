<template>
    <h1>Hello World! Welcome to the Homepage</h1>
</template>

<script>
    export default {
        name: 'Home-page',
        mounted(){
        let user = localStorage.getItem('user-credentials');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }
    }
    }
</script>