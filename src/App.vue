<script>

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};

</script>

<template>

  <div class="container-fluid my-2">
    <div class="row justify-content-between gy-4">

      <AppHeader/>
      <AppMain/>
      <AppFooter/>

    </div>
  </div>

</template>

<style lang="scss">

@import "./style/global.scss";

</style>
