<template>
  <div id="cohorts-wrapper">
    <Cohort
      v-for="cohort in cohorts"
      :key="cohort.name"
      v-bind:cohort="cohort"
      @deleteCohort="deleteCohort"
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
  methods: {
    deleteCohort: async function(id) {
      this.cohorts = this.cohorts.filter((cohort) => cohort._id !== id);
      await axios.delete(`/cohorts/${id}`);
    },
  },
  created: async function() {
    const { data: cohorts } = await axios.get("/cohorts");
    this.cohorts = cohorts.sort(function(a, b) {
      return new Date(b.startDate) - new Date(a.startDate);
    });
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
