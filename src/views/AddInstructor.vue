<template>
  <div id="form-wrapper">
    <h3>Add Instructor</h3>
    <form @submit.prevent="sendNewInstructorToServer">
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
    sendNewInstructorToServer: async function() {
      const newInstructor = {
        name: this.name,
        picture: this.picture,
        github: this.github,
        linkedin: this.linkedin,
        twitter: this.twitter,
        medium: this.medium,
        quote: this.quote,
      };
      await axios.post("/instructors", newInstructor);
    },
  },
  data: function() {
    return {
      name: "",
      picture: "",
      github: "",
      linkedin: "",
      twitter: "",
      medium: "",
      quote: "",
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
