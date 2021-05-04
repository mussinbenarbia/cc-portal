<template>
  <div id="register-form">
    <form @submit.prevent="sendRegister">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    sendRegister: async function() {
      const registrationData = {
        username: this.username,
        password: this.password,
      };
      await axios.post("/register", registrationData);
    },
  },
};
</script>

<style scoped>
#register-form {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  height: 10rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
