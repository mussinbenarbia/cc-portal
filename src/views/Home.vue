<template>
  <div id="home-wrapper">
    <img id="theboss" src="../assets/potato.jpg" alt="" />
    <h2>Welcome!</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  created: async function() {
    if (!this.$root.isLogged) {
      const result = await axios.get("/login");
      if (result.status === 200) {
        this.$emit("login");
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-wrapper {
  margin-top: 5rem;
}

#theboss {
  width: 30rem;
  border-radius: 50%;
  margin-bottom: 1rem;
}
</style>
