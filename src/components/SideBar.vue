// filepath: c:\Users\andres\Documents\repositories\terra-metrics-view\src\components\Sidebar.vue
<template>
  <div id="topbar">
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
#topbar {
  width: 100%;
  height: 60px;
  background-color: #f4f4f4;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

#topbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

#topbar ul li {
  margin: 0 20px;
}

#topbar ul li a {
  text-decoration: none;
  color: #333;
}
</style>