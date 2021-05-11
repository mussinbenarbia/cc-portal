<template>
  <img class="user-icon" v-bind:src="picture" alt="..." />
</template>

<script>
export default {
  name: "UserIcon",
  props: ["picture"],
};
</script>

<style>
.user-icon {
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.selected {
  border: 2px solid #42b983;
}
</style>
