<template>
    <Header />
    <h1>Hello {{ username }}! Welcome to the Homepage</h1>
    <p>Here will be an intro to the page background image is necesarry!!
    </p>
    <table border="1px">
        <tr v-for="fact in trivia" :key="fact.id">
            <td>{{ fact.title }}</td>
            <td>{{ fact.content }}</td>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'Home-page',
    data() {
        return {
            username: '',
            trivia: [],
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-credentials');
        this.username = JSON.parse(user).username;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }

        let result = await axios.get("http://localhost:3000/trivia");
        console.log(result);
        console.log(this.trivia);
        this.trivia = result.data;

    }
}
</script>

<style>
    td {
        height: 100px;
        width: 600px;
    }
</style>