<template>
  <div id="demo3">
    <h2>Data and Variable</h2>
    <button @click="count++">Count++</button>
    <p>{{ count }}</p>
    <p>{{ message }}</p>
    <input type="text" placeholder="Enter message" v-model="message">
    <h3 v-if="message === 'life'">Bad</h3>
    <p>{{ account }}</p>
    <p>{{ province }}</p>
    <ul>
      <li v-for="(item, index) in province" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo3_data',
  mounted() {
    this.message = 'Welcome to dark world';
  },
  data() {
    return {
      count: 0,
      message: '',
      account: {
        username: 'admin',
        password: '1234'
      },
      province: [
        'Bangkok',
        'Phuket',
        'Suratthani'
      ]
    }
  }
}
</script>

<style scoped>
  li {
    color: royalblue;
  }
</style>