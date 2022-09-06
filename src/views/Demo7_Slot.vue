<template>
  <div id="demo7">
    <Clock>
      <span>เวลาปัจจุบัน</span>
    </Clock>

    <Clock>
      <span>Time</span>
    </Clock>

    <Clock />

    <Clock>
      <p>เหมาะสำหรับใช้ในการแก้ไข child component บางส่วน</p>
      <span style="color: orange;">เวลาปัจจุบัน</span>
      <template v-slot:header>
        <h1>Header</h1>
      </template>

      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from '@/components/helpers/Clock.vue';
export default {
  name: 'demo7_slot',
  components: {
    Clock
  }
}
</script>

<style>

</style>