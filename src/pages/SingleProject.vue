<script>

  import axios from "axios";

  export default {
      name: "SingleProject",
      data() {
      return {
          project: [],
        };
    },
    created() {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response) => {
          this.project = response.data;
        });
    },
};
</script>

<template>

    <div v-if="project">
      <img :src="project.project_image" :alt="project.name" />
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>

</template>

<style lang="scss" scoped>



</style>