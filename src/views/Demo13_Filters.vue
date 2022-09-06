<template>
  <div id="demo13">
    <h3>{{ 1234 | currency("THB") }}</h3>
    <h3>{{ 200000000 | bytes }}</h3>
    <h3>{{ "narapat" | uppercase  }}</h3>
    <h3>{{ "narapat" | capitalize({ onlyFirstLetter: true }) }}</h3>
    <h3>{{ [1, 2,3 ] | reverseArray }}</h3>
  </div>
</template>

<script>
export default {
  name: 'demo13_filters',
  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    }
  }
}
</script>

<style>

</style>