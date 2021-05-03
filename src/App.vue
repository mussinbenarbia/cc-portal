<template>
  <div>
    <Navbar @liClicked="test" v-bind:currentView="currentView" />
    <Home v-if="currentView === 'Home'" />
    <Cohorts v-if="currentView === 'Cohorts'" />
    <Instructors v-if="currentView === 'Instructors'" />
    <Students v-if="currentView === 'Students'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Instructors from "./components/Instructors";
import Students from "./components/Students";
import Cohorts from "./components/Cohorts";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Instructors,
    Students,
    Cohorts,
  },
  data: function() {
    return {
      currentView: "Home",
    };
  },
  methods: {
    test: function(evt) {
      this.currentView = evt;
    },
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
</style>
