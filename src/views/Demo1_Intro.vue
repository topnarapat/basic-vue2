<template>
  <div>
    <h2>Demo 1</h2>
    <div>
      <h2>{{ title }}</h2>
      <h2>{{ count }}</h2>
      <button @click="handleClickAdd">Add</button>
    </div>
    <div>
      <input v-model="message" type="text" placeholder="Enter your message">
      <p>{{ message }}</p>
      <button @click="message = ''">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo1_intro',
  data() {
    return {
      title: 'Hello Narapat',
      count: 0,
      message: ''
    }
  },
  methods: {
    handleClickAdd() {
      this.count = this.count + 1;
    }
  },
}
</script>

<style>

</style>