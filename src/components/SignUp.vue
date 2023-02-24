<template>
    <img class="logo" src="../assets/logo.svg"/>
    <h1>Sign Up</h1>

    <div class="register">
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />

        <button>Sign up</button>
    </div>

</template>

<script>
    export default {
        name: 'SignUp'
    }
</script>

<style>
    .logo {
        width: 55em;
        margin-top: 50px;
    }

    .register {

    }

    .register input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
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