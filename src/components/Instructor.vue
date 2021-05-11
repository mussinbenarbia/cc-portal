<template>
  <div class="card instructor-wrapper" style="width: 18rem;">
    <img v-bind:src="instructor.picture" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ instructor.name }}</h5>
      <p class="card-text">
        {{ instructor.quote }}
      </p>
    </div>
    <div>
      <div class="social-wrapper">
        <a v-bind:href="instructor.linkedin"
          ><i class="social-icon fab fa-2x fa-linkedin-in"></i
        ></a>
        <a v-bind:href="instructor.github"
          ><i class="social-icon fab fa-2x fa-github"></i
        ></a>

        <a v-bind:href="instructor.twitter"
          ><i class="social-icon fab fa-2x fa-twitter"></i
        ></a>

        <a v-bind:href="instructor.twitter"
          ><i class="social-icon fab fa-2x fa-medium"></i
        ></a>
      </div>
      <div class="controls" v-if="isLogged()">
        <button
          @click="$emit('deleteInstructor', instructor._id)"
          type="button"
          class="btn-close btn-sm position-absolute top-0 end-0"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructor",
  props: ["instructor"],
  methods: {
    isLogged: function() {
      return this.$root.isLogged;
    },
  },
};
</script>

<style scoped>
.instructor-wrapper {
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

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
