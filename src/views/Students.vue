<template>
  <div class="students-wrapper">
    <Student
      v-for="student in students"
      :key="student._id"
      v-bind:student="student"
    />
  </div>
</template>

<script>
import axios from "axios";
import Student from "../components/Student";

export default {
  name: "Students",
  components: {
    Student,
  },

  created: async function() {
    const { data: students } = await axios.get(
      "http://localhost:4000/students"
    );
    this.students = students;
  },

  data: function() {
    return {
      students: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.students-wrapper {
  display: flex;
}
</style>
