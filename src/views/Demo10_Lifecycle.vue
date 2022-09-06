<template>
  <div id="demo10">
    <p>{{ counter }}</p>
    <button @click="add">Click</button>
  </div>
</template>

<script>
export default {
  name: 'demo10_lifecycle',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    // ส่วนมากดักเพื่อกำหนด UI เบื้องต้น
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
}
</script>

<style>

</style>