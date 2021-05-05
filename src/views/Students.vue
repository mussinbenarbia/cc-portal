<template>
  <div class="students-wrapper">
    <Student
      v-for="student in students"
      :key="student._id"
      v-bind:student="student"
      @deleteStudent="deleteStudent"
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

  methods: {
    deleteStudent: async function(id) {
      this.students = this.students.filter((student) => student._id !== id);
      await axios.delete(`/students/${id}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.students-wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
