<template>
  <div id="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/demo1">Demo 1</router-link></li>
      <li><router-link to="/demo2">Demo 2</router-link></li>
      <li><router-link to="/demo3">Demo 3</router-link></li>
      <li><router-link to="/demo4">Demo 4</router-link></li>
      <li><router-link to="/demo5">Demo 5</router-link></li>
      <li><router-link to="/demo6">Demo 6</router-link></li>
      <li><router-link to="/demo7">Demo 7</router-link></li>
      <li><router-link to="/demo8">Demo 8</router-link></li>
      <li><router-link to="/demo9">Demo 9</router-link></li>
      <li><router-link to="/demo10">Demo 10</router-link></li>
      <li><router-link to="/demo11">Demo 11</router-link></li>
      <li><router-link to="/demo12">Demo 12</router-link></li>
      <li><router-link to="/demo13">Demo 13</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 10px;
  }
</style>