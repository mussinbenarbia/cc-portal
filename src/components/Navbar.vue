<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">CC-Portal</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="{ active: currentView === 'Cohorts' }"
              aria-current="page"
              to="/cohorts"
              >Cohorts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="{ active: currentView === 'Students' }"
              aria-current="page"
              to="/students"
              >Students</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-bind:class="{ active: currentView === 'Instructors' }"
              aria-current="page"
              to="/instructors"
              >Instructors</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="this.$root.isLogged"
              v-bind:class="{ active: currentView === 'AddStudent' }"
              aria-current="page"
              to="/add/student"
              >Add Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="this.$root.isLogged"
              v-bind:class="{ active: currentView === 'addInstructor' }"
              aria-current="page"
              to="/add/instructor"
              >Add Instructor</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="this.$root.isLogged"
              v-bind:class="{ active: currentView === 'addCohort' }"
              aria-current="page"
              to="/add/cohort"
              >Add Cohort</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              @click="this.$root.isLogged ? logout() : login()"
              v-bind:class="{ active: currentView === 'addCohort' }"
              aria-current="page"
              to="/"
              >{{ this.$root.$data.isLogged ? "Logout" : "Login" }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isLogged"],
  name: "Navbar",
  data: function() {
    return {
      currentView: "",
    };
  },
  methods: {
    logout: function() {
      this.$emit("logout");
    },
    login: function() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
