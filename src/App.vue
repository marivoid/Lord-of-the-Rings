<template>
  <router-view />
  <!-- <SignUp /> -->
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  // components: {
  //   SignUp
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  padding: 0;
  margin: 0;
}

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

.register, .login {
    margin-top: 10em;
}

.register input, .login input, {
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

.register button, .login button, {
    width: 280px;
    height: 40px;
    border: none;
    background-color: gold;
    border-radius: 30px;
    cursor: pointer;
}
</style>
