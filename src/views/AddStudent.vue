<template>
  <div id="form-wrapper">
    <h3>Add Student</h3>
    <form @submit.prevent="sendNewStudentToServer">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="name"
        />
        <label for="floatingInput">Full Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="cohort"
        />
        <label for="floatingInput">Cohort</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="picture"
        />
        <label for="floatingInput">Picture Url</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="github"
        />
        <label for="floatingInput">Github Url</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="linkedin"
        />
        <label for="floatingInput">Linkedin Url</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="twitter"
        />
        <label for="floatingInput">Twitter Url</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="medium"
        />
        <label for="floatingInput">Medium Url</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="''"
          v-model="quote"
        />
        <label for="floatingInput">Quote!</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddStudent",
  methods: {
    sendNewStudentToServer: async function() {
      const newStudent = {
        name: this.name,
        picture: this.picture,
        github: this.github,
        cohort: this.cohort,
        linkedin: this.linkedin,
        twitter: this.twitter,
        medium: this.medium,
        quote: this.quote,
      };
      await axios.post("/students", newStudent);
      this.$router.push("/students");
    },
  },
  data: function() {
    return {
      name: "",
      github: "",
      cohort: "",
      linkedin: "",
      twitter: "",
      medium: "",
      quote: "",
      picture: "",
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
  margin-top: 1rem;
}
form {
  width: 20rem;
}
</style>
