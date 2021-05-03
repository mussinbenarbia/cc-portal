<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="$emit('liClicked', 'Home')"
        >CC-Portal</a
      >
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
            <a
              class="nav-link"
              v-bind:class="{ active: currentView === 'Cohorts' }"
              aria-current="page"
              href="#/cohorts"
              @click="$emit('liClicked', 'Cohorts')"
              >Cohorts</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: currentView === 'Students' }"
              aria-current="page"
              href="#/students"
              @click="$emit('liClicked', 'Students')"
              >Students</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: currentView === 'Instructors' }"
              aria-current="page"
              href="#/instructors"
              @click="$emit('liClicked', 'Instructors')"
              >Instructors</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["currentView"],
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
