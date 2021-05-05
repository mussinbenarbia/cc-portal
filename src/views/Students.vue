<template>
  <div class="students">
    <div class="students-wrapper">
      <Student
        v-for="student in students"
        :key="student._id"
        v-bind:student="student"
        @deleteStudent="deleteStudent"
      />
    </div>
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
.students {
  width: 100%;
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
}

.students-wrapper {
  margin-top: 1rem;
  display: flex;

  flex-wrap: wrap;
  width: 63%;
  border: 1px solid red;
}
</style>
