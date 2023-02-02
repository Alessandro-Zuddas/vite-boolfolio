<script>

import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectsList",

  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    }
  },
  created(){
    axios.get(`http://127.0.0.1:8000/api/projects`)
      .then(res => {
        this.projects = res.data.results;
      });
  }
};

</script>

<template>

    <div class="row gy-2">
        <ProjectCard 
        v-for="project in projects"
        :data="project"
        />
    </div>

</template>

<style lang="scss" scoped>



</style>