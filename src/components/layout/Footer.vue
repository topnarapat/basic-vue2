<template>
  <div id="footer">
    <p :style="{color:textColor}">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'footerComponent',
  mounted() {
    setInterval(() => {
      this.$emit('showDate', Date());
    }, 100)
  },
  props: [
    "title",
    "textColor"
  ]
}
</script>

<style>

</style>