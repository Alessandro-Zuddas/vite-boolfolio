<script>

import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
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

  <div class="container-fluid my-2">
    <div class="row justify-content-between gy-4">

      <ProjectCard 
        v-for="project in projects"
        :data="project"
      />

    </div>
  </div>

</template>

<style lang="scss">

@import "./style/global.scss";

</style>
