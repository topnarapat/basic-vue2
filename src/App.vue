<template>
  <div id="app">
    <Sidebar />
    <Content />
    <!-- <Header />
    <Footer @showDate="onClock" title="Basic Vue 2" textColor="red" />
    <p>{{ time }}</p> -->
  </div>
</template>

<script>
// import Header from '@/components/layout/Header.vue';
// import Footer from '@/components/layout/Footer.vue';
import Content from '@/components/layout/Content.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'app',
  methods: {
    onClock(value) {
      this.time = value;
    }
  },
  components: {
    // Header,
    // Footer,
    Content,
    Sidebar
  },
  data() {
    return {
      time: ''
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>