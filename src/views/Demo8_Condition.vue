<template>
  <div id="demo8">
    <p v-if="type === 'A'">A</p>
    <p v-else-if="type === 'B'">B</p>
    <p v-else>C</p>

    <p v-if="isShow">Blink 1</p>
    <p v-else>Blink 2</p>

    <p>v-show คล้าย v-if โดยจะ render แต่ display: none ไว้ ซึ่ง v-show จะมีประโยชน์ในกรณีที่เราไม่ต้องการทำลาย element แค่สั่ง hide ไว้ แต่ถ้าเป็น v-if จะไม่ render เลย สามารถเช็คได้โดยการ inspect ดู</p>
    <p v-show="isShow2">Blink v-show</p>
  </div>
</template>

<script>
export default {
  name: 'demo8_condition',
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow
    }, 500)
  },
  data() {
    return {
      type: 'B',
      isShow: false,
      isShow2: false
    }
  }
}
</script>

<style>

</style>