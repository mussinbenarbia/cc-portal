<template>
  <div class="cohort-wrapper">
    <div class="cohort-info">
      <div class="cohort-name">{{ cohort.name }}</div>
      <div class="cohort-dates">
        <div class="cohort-start">
          {{ new Date(cohort.startDate).toLocaleDateString() }}
        </div>
        ~
        <div class="cohort-end">
          {{ new Date(cohort.gradDate).toLocaleDateString() }}
        </div>
      </div>
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
    <button
      @click="$emit('deleteStudent', student._id)"
      type="button"
      class="btn btn-sm btn-danger delete-cohort"
    >
      Delete
    </button>
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
  display: flex;
  height: 15rem;
  width: 90%;
  border-top: 1px solid #42b983;
}

.cohort-wrapper:nth-last-of-type(1) {
  border-bottom: 1px solid #42b983;
}

.cohort-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
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

.cohort-name {
  font-size: 2rem;
}

.cohort-dates {
  margin-top: 1rem;
}
.delete-cohort {
  margin-top: 1rem;
  align-self: flex-start;
}
</style>
