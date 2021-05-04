<template>
  <div id="app-wrapper">
    <Navbar v-bind:isLogged="isLogged" @logout="logout" />
    <router-view @login="login" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  methods: {
    login: function() {
      this.isLogged = true;
    },
    logout: function() {
      this.isLogged = false;
    },
  },
  data: function() {
    return {
      isLogged: false,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
