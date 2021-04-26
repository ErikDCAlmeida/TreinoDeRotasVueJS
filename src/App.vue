<template>
  <div id="app">
    <Header />
    <router-view class="container" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0px 10px;
}
#app {
  font-family: "Ubuntu", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
