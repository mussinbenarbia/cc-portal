<template>
  <div class="cohort-wrapper">
    <div class="cohort-info">
      <div class="cohort-name">{{ cohort.name }}</div>
      <div class="cohort-start">{{ cohort.startDate }}</div>
      <div class="cohort-end">{{ cohort.endDate }}</div>
    </div>

    <div class="cohort-members">
      <div class="cohort-instructors">{{ cohort.instructors }}</div>
      <div class="cohort-students">{{ cohort.students }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cohort",
  props: ["cohort"],
};
</script>

<style scoped>
.cohort-wrapper {
  margin: 5px;
  display: flex;
  height: 10rem;
  border: 1px solid black;
}

.cohort-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
}

.cohort-members {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.cohort-instructors,
.cohort-students {
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
</style>
