<template>
  <div id="cohorts-wrapper">
    <Cohort
      v-for="cohort in cohorts"
      :key="cohort.name"
      v-bind:cohort="cohort"
    />
  </div>
</template>

<script>
import axios from "axios";
import Cohort from "../components/Cohort";

export default {
  components: {
    Cohort,
  },
  created: async function() {
    const { data: cohorts } = await axios.get("/cohorts");
    this.cohorts = cohorts.sort(function(a, b) {
      return new Date(b.startDate) - new Date(a.startDate);
    });

    console.log(this.cohorts);
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
<style scoped>
#cohorts-wrapper {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
