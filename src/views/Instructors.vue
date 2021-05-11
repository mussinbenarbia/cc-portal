<template>
  <div class="instructors">
    <div class="instructors-wrapper">
      <Instructor
        v-for="instructor in instructors"
        :key="instructor._id"
        v-bind:instructor="instructor"
        @deleteInstructor="deleteInstructor"
      />
    </div>
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
    const { data: instructors } = await axios.get("/instructors");
    this.instructors = instructors;
  },

  data: function() {
    return {
      instructors: [],
    };
  },

  methods: {
    deleteInstructor: async function(id) {
      this.instructors = this.instructors.filter(
        (instructor) => instructor._id !== id
      );
      await axios.delete(`/instructors/${id}`);
    },
  },

  name: "Instructors",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instructors {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.instructors-wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
