<template>
    <h1>Login in</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password" />

        <button>Login</button>
    </div>

    <div class="login-link">
        <p>Don't have an account?
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'LogIn'
}
</script>