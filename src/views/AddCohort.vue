<template>
  <div id="form-wrapper">
    <h3>Add Cohort</h3>
    <form @submit.prevent="sendNewCohortToServer">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="name"
        />
        <label for="floatingInput">Cohort Name</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="date"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="startDate"
        />
        <label for="floatingInput">Start Day</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="date"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="gradDate"
        />
        <label for="floatingInput">Graduation Day</label>
      </div>

      <div class="instructors">
        <UserIcon
          v-for="instructor in instructors"
          v-bind:class="{ selected: instructor.selected === true }"
          :key="instructor._id"
          v-bind:github="instructor.github"
          @click="toggleTeacher(instructor._id)"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import UserIcon from "../components/UserIcon";

export default {
  name: "AddStudent",
  components: {
    UserIcon,
  },
  created: async function() {
    const { data: instructors } = await axios.get(
      "http://localhost:4000/instructors"
    );
    this.instructors = instructors.map((instructor) => ({
      selected: false,
      ...instructor,
    }));
  },
  methods: {
    toggleTeacher: function(instructorID) {
      this.instructors.forEach((instructor) => {
        if (instructor._id === instructorID) {
          instructor.selected = !instructor.selected;
        }
      });
    },

    sendNewCohortToServer: async function() {
      const newCohort = {
        name: this.name,
        startDate: this.startDate,
        gradDate: this.gradDate,
        instructors: this.instructors
          .filter((inst) => inst.selected)
          .map((inst) => inst._id),
      };
      console.log(newCohort);
      await axios.post("/cohorts", newCohort);
    },
  },
  data: function() {
    return {
      instructors: [],
      name: "",
      startDate: "",
      gradDate: "",
    };
  },
};
</script>

<style scoped>
#form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
form {
  width: 20rem;
}
</style>
