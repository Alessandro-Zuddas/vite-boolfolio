<script>

import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {

    }
  },
};

</script>

<template>

  
  <div class="container-fluid my-2">
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>


</template>

<style lang="scss">

@import "./style/global.scss";

</style>
