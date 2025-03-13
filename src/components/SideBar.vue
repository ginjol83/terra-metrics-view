// filepath: c:\Users\andres\Documents\repositories\terra-metrics-view\src\components\Sidebar.vue
<template>
  <div id="sidebar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style>
#sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
}
#sidebar ul {
  list-style-type: none;
  padding: 0;
}
#sidebar ul li {
  margin: 20px 0;
}
#sidebar ul li a {
  text-decoration: none;
  color: #333;
}
</style>