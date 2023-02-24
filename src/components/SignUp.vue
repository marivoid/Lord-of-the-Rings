<template>
    <!-- <img class="background" src="../assets/background.jpg" /> -->
    <!-- <div v-bind:style='{ backgroundImage: "url("+ background.jpg + ")", }'></div> -->
    <!-- <img class="logo" src="../assets/logo.svg"/> -->
    <div class="register">
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />

        <button>Sign up</button>
    </div>

    <div class="login-link">
        <p>Already have an account? <a href="youtube.com">Login</a></p>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
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