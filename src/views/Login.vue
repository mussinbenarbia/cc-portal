<template>
  <div>
    <div id="login-form">
      <form @submit.prevent="sendLogin">
        <h3>Login</h3>

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
        <button type="submit" class="btn btn-success">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    sendLogin: async function() {
      const loginData = {
        username: this.username,
        password: this.password,
      };
      const result = await axios.post("/login", loginData);
      if (result.status === 200) {
        this.$emit("login");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
#login-form {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  height: 15rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
