<template>
  <div id="demo12">
    <h1 ref="title">Ref</h1>
    <input ref="input1" type="text">
    <h2 ref="txt">Test</h2>
  </div>
</template>

<script>
export default {
  name: 'demo12_ref',
  mounted() {
    this.$refs["title"].textContent = 'New Ref';
    this.$refs["input1"].focus();
    this.$refs["txt"].innerHTML = 'ใช้เพื่ออ้างถึง element ที่มี refs นั้นๆอยู่ แทนการใช้ getElementById หรือ jQuery';
  }
}
</script>

<style>

</style>