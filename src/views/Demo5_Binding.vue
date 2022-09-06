<template>
  <div id="demo5">
    <img v-bind:src="imageUrl" v-bind:height="height">
    <br>
    <a v-bind:href="google">Google</a>
    <br>
    <a :href="facebook">Facebook</a>
    <div :class="errorClass">Narapat</div>
    <div :class="[errorClass, colorClass]">Top</div>
    <div :class="false ? errorClass : colorClass">Top2</div>
    <div :style="{color: fontColor}">Tangfa</div>
    <div :style="styleObj">Yaowalak</div>
    <div :style="isActive ? styleObj : ''">Chopper</div>
    <button @click="isActive = !isActive">Toggle</button>
  </div>
</template>

<script>
export default {
  name: 'demo5_binding',
  data() {
    return {
      imageUrl: 'https://cdn.pixabay.com/photo/2022/08/06/12/34/corsac-fox-7368515_960_720.jpg',
      height: 200,
      google: 'https://www.google.com',
      facebook: 'https://www.facebook.com',
      errorClass: 'error',
      colorClass: 'color',
      fontColor: 'green',
      styleObj: {
        backgroundColor: 'yellow',
        color: 'blue'
      },
      isActive: false
    }
  }
}
</script>

<style>
  .error {
    background-color: burlywood;
  }

  .color {
    color: red;
  }
</style>