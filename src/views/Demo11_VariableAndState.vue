<template>
  <div id="demo11">
    <p>{{ count }}</p>
    <p>{{ Math.random() }}</p>
    <p>{{ timestamp }}</p>
    <button @click="timestamp = Date.now()">Update Timestamp</button>
    <button @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
  name: 'demo11_variableandstate',
  created() {
    this.timestamp = 0; // variable เมื่อมีการเปลี่ยนแปลง component จะไม่มีการ render ใหม่
  },
  mounted() {
    setInterval(() => {
      // this.count++;
      console.log('Timestamp', this.timestamp);
    }, 3000)
  },
  data() {
    return {
      count: 0 // local state ไม่สามารถแชร์ไป component อื่นได้ ทุกครั้งที่มีการเปลี่ยนแปลงจะทำการ render ใหม่
    }
  }
}
</script>

<style>

</style>