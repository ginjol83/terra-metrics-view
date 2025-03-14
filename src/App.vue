// filepath: c:\Users\andres\Documents\repositories\terra-metrics-view\src\App.vue
<template>
  <div id="app">
    <sidebar />
    <div id="main-content">
      <!-- img alt="Vue logo" src="./assets/logo.webp" width="100px" height="100px" -->
      <HelloWorld msg="Terra Metrics"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Sidebar
  }
}
</script>

<style>
#app {
  display: flex;
}
#main-content {
  margin-left: 220px; /* Adjust this value based on the width of your sidebar */
  padding: 20px;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>