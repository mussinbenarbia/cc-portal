<template>
  <img
    class="user-icon"
    v-bind:src="`https://avatars.githubusercontent.com/${github}`"
    alt="..."
  />
</template>

<script>
export default {
  name: "UserIcon",
  props: ["github"],
};
</script>

<style>
.user-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: block;
}
</style>
