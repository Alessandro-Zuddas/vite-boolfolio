<script>

import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "AppMain",

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
        console.log(this.projects);
      });
  }
};

</script>

<template>

    <main class="row gy-2">
        <ProjectCard 
        v-for="project in projects"
        :data="project"
        />
    </main>

</template>

<style lang="scss" scoped>



</style>