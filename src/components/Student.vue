<template>
  <div class="card student-wrapper" style="width: 18rem;">
    <img
      v-bind:src="`https://avatars.githubusercontent.com/${student.github}`"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ student.name }}</h5>
      <p class="card-text">
        {{ student.quote }}
      </p>
    </div>
    <div>
      <div class="social-wrapper">
        <a
          v-if="student.linkedin"
          v-bind:href="`https://www.linkedin.com/in/${student.linkedin}/`"
          ><i class="social-icon fab fa-2x fa-linkedin-in"></i
        ></a>
        <a
          v-if="student.github"
          v-bind:href="`https://github.com/${student.github}`"
          ><i class="social-icon fab fa-2x fa-github"></i
        ></a>

        <a
          v-if="student.twitter"
          v-bind:href="`https://twitter.com/${student.twitter}`"
          ><i class="social-icon fab fa-2x fa-twitter"></i
        ></a>

        <a
          v-if="student.medium"
          v-bind:href="`https://twitter.com/${student.medium}`"
          ><i class="social-icon fab fa-2x fa-medium"></i
        ></a>
      </div>
      <div class="controls" v-if="isLogged()">
        <button
          @click="$emit('deleteStudent', student._id)"
          type="button"
          class="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isLogged: function() {
      return this.$root.isLogged;
    },
  },
  name: "Student",
  props: ["student"],
};
</script>

<style scoped>
.student-wrapper {
  margin: 5px;
}

.social-wrapper {
  display: flex;
  justify-content: center;
}

.social-icon {
  padding: 5px;
}

.controls {
  margin: 5px;
}
</style>
