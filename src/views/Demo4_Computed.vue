<template>
  <div id="demo4">
    <h2>Computed</h2>
    <h3>{{ nickname }}</h3>
    <h3>{{ firstname }}</h3>
    <h3>{{ fullname }}</h3>
    <h4>Random from computed : {{ getRandom2 }}</h4>
    <h4>Random from computed : {{ getRandom2 }}</h4>
    <h4>Random from computed : {{ getRandom2 }}</h4>
    <p>computed จะแสดงค่าล่าสุดเท่านั้น การเรียกครั้งแรกได้ค่านึง ครั้งที่สองได้อีกค่านึง ครั้งที่สามได้อีกค่านึง แต่จะแสดงค่าของครั้งสุดท้ายที่เรียกเท่านั้น ดังนั้นทั้ง 3 ค่าจึงแสดงเท่ากัน</p>
    <h4>Random from methods : {{ getRandom1() }}</h4>
    <h4>Random from methods : {{ getRandom1() }}</h4>
  </div>
</template>

<script>
export default {
  name: 'demo4_computed',
  data() {
    return {
      nickname: 'Top',
      firstname: 'Narapat'
    }
  },
  methods: {
    getRandom1() {
      return Math.random()
    }
  },
  computed: {
    fullname() {
      return this.nickname + ' ' + this.firstname;
    },
    getRandom2() {
      return Math.random()
    }
  }
}
</script>

<style>

</style>