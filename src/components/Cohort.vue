<template>
  <div class="cohort-wrapper">
    <div class="cohort-info">
      <div class="cohort-name">{{ cohort.name }}</div>
      <div class="cohort-start">{{ cohort.startDate }}</div>
      <div class="cohort-end">{{ cohort.endDate }}</div>
    </div>

    <div class="cohort-members">
      <span>Instructors</span>
      <div class="cohort-instructors">
        <UserIcon
          v-for="instructor in cohort.instructors"
          :key="instructor.github"
          v-bind:github="instructor.github"
        />
      </div>

      <span>Students</span>
      <div class="cohort-students">
        <UserIcon
          v-for="student in cohort.students"
          :key="student.github"
          v-bind:github="student.github"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "./UserIcon";

export default {
  name: "Cohort",
  props: ["cohort"],
  components: {
    UserIcon,
  },
};
</script>

<style scoped>
.cohort-wrapper {
  margin-bottom: 25px;
  display: flex;
  height: 15rem;
  border: 10px solid #42b983;
}

.cohort-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cohort-members {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.cohort-instructors,
.cohort-students {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
