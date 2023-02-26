@import 'bulma/css/bulma.css'
<template>
    <Header />
    <div class="columns is-vcentered is-mobile">
        <section class="section">
            <div class="column is-6 has-text-left">
                <h1 class="title is-2 ">Welcome to the Add Trivia page</h1>
                <div class="is-size-5">
                    Have a fact or piece of trivia about the movies, books, author or actors while filming?
                    Share it with the rest of us! Learning new things about the media we love is always exciting
                    and can bring the community closer together. So whatcha waiting for? Share them facts!
                </div>
            </div>

            <div class="column is-6">
                <div class="mt-5">
                    <form class="add">
                        <!-- two way binding (v-model) -->
                        <input class="input size" type="text" name="title" placeholder="Enter title"
                            v-model="trivia.title" />
                        <textarea class="textarea mt-3" type="text" name="content" placeholder="Enter content"
                            v-model="trivia.content"></textarea>
                        <button class="mt-5" type="button" v-on:click="add">Add fact</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: 'AddTrivia',
    components: {
        Header
    },
    data() {
        return {
            trivia: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        async add() {
            console.log(this.trivia);
            const result = await axios.post("http://localhost:3000/trivia", {
                title: this.trivia.title,
                content: this.trivia.content
            });
            if (result.status == 201) {
                // if the new trivia was created, redirect me to the homepage
                this.$router.push({ name: 'HomePage' });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-credentials');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style>
    .section {
        padding: 30px;
    }

.input {
    width: 35em;
}
</style>