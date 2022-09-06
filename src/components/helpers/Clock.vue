<template>
  <div id="clock">
    <slot name="header"></slot>
    <slot>Now</slot> : {{ time }}
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'clockComponent',
  data() {
    return {
      time: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.time = Date()
    }, 1000)
  }
}
</script>

<style>

</style>