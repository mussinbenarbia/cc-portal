<template>
  <div class="instructors-wrapper">
    <Instructor
      v-for="instructor in instructors"
      :key="instructor._id"
      v-bind:instructor="instructor"
    />
  </div>
</template>

<script>
import axios from "axios";
import Instructor from "../components/Instructor";

export default {
  components: {
    Instructor,
  },

  created: async function() {
    const { data: instructors } = await axios.get(
      "http://localhost:4000/instructors"
    );
    this.instructors = instructors;
  },

  data: function() {
    return {
      instructors: [],
    };
  },

  name: "Instructors",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instructors-wrapper {
  display: flex;
}
</style>
