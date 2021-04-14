<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <hr>
  <HttpPostRequest />
  <hr>
  <HttpGetRequest />
  <hr>
  <HttpGetApiBase />
</template>

<script>
import HttpPostRequest from './components/HttpPostRequest'
import HttpGetRequest from './components/HttpGetRequest'
import HttpGetApiBase from './components/HttpGetApiBase'

export default {
  name: 'App',
  components: {
    HttpPostRequest,
    HttpGetRequest,
    HttpGetApiBase

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  font-weight: bold;
}
</style>
