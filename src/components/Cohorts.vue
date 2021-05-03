<template>
  <Cohort v-for="cohort in cohorts" :key="cohort.name" v-bind:cohort="cohort" />
</template>

<script>
import axios from "axios";
import Cohort from "./Cohort";

export default {
  components: {
    Cohort,
  },
  created: async function() {
    const { data: cohorts } = await axios.get("http://localhost:4000/cohorts");
    this.cohorts = cohorts;
  },

  data: function() {
    return {
      cohorts: [],
    };
  },

  props: [],

  name: "Cohorts",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
