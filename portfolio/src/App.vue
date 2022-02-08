<template>
  <div class="container">
    <Navigation></Navigation>
    <router-view />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {Navigation}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body{
  margin: 0;
  padding: 15px;
  padding-top: 20px;
  background: linear-gradient(60deg, #c18fff, #e6c2ff) fixed no-repeat;
}

.container{
  padding: 10px 0px;
  border-radius: 50px;
  background-color: #b980ff;
  position: relative;
}

.container::before{
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50px;
  background-color: #9938f5;
  z-index: -1;
  transform: rotate(-1deg);
  // box-shadow: 0px 0px 1px black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
