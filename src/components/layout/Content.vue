<template>
  <div id="content" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'contentComponent'
}
</script>

<style>
  .container {
    margin-left: 300px;
    padding-top: 20px;
    padding-right: 50px;
  }
</style>