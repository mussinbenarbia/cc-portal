<template>
  <div>HOME VIEW</div>
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
<style scoped></style>
