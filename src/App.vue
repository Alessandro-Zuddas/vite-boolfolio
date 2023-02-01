<script>

import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: {},
    }
  },
  created(){
    axios.get(`http://127.0.0.1:8000/api/projects`)
      .then(res => {
        this.projects = res.data;
        console.log(this.projects.results);
      });
  }

};

</script>

<template>

  <div>

    <ProjectCard />

  </div>

</template>

<style lang="scss">

@import "./style/global.scss";

</style>
