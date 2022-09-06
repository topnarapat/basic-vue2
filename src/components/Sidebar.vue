<template>
  <div>
    <nav class="sidebar">
      <div class="text">Vue 2</div>
      <ul>
        <li v-for="(item, index) in menu" :key="index"><router-link :to="item.link">{{ item.title }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      menu: [
        { link: '/', title: 'Home' },
        { link: '/demo1', title: 'Intro' },
        { link: '/demo2', title: 'Event and Method' },
        { link: '/demo3', title: 'Data' },
        { link: '/demo4', title: 'Computed' },
        { link: '/demo5', title: 'Binding' },
        { link: '/demo6', title: 'Form' },
        { link: '/demo7', title: 'Slot' },
        { link: '/demo8', title: 'Condition' },
        { link: '/demo9', title: 'Loop' },
        { link: '/demo10', title: 'Life Cycle' },
        { link: '/demo11', title: 'Variable and State' },
        { link: '/demo12', title: 'Ref' },
        { link: '/demo13', title: 'Filters' },
      ]
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
    color: white;
  }
  .sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
    left: 0;
    background: #1B1B1B;
  }
  .sidebar .text {
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 65px;
    text-align: center;
    background: #1E1E1E;
    letter-spacing: 1px;
  }
  nav ul {
    background: #1B1B1B;
    height: 100%;
    width: 100%;
    list-style: none;
  }
  nav ul li {
    line-height: 60px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding-left: 40px;
    font-weight: 500;
    display: block;
    width: 100%;
    border-left: 3px solid transparent;
  }
  nav ul li a:active {
    color: cyan;
    background: #1E1E1E;
    border-left-color: cyan;
  }
</style>