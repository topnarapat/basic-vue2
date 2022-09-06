<template>
  <div id="demo2">
    <h2>Event and Method</h2>
    <button v-on:click="clickMe">Click</button>
    <button @click="clickMe2">Click2</button>
    <button @click="clickMe3('Hola')">Click2</button>
    <h3>{{ sayHi() }}</h3>
  </div>
</template>

<script>
export default {
  name: 'demo2_eventmethod',
  mounted() {
    this.initial();
  },
  methods: {
    clickMe() {
      alert('Hello');
    },
    clickMe2() {
      alert('Hi');
    },
    clickMe3(message) {
      alert(message);
    },
    sayHi() {
      return 'Sawasdee';
    },
    initial() {
      console.log('Initial');
    },
  }
}
</script>

<style>

</style>