<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  max-width: 414px;
  min-width: 320px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
}
</style>
