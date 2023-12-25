<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(255, 247, 238);
}
.app {
  padding: 20px;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
