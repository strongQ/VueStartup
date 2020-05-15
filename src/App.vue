<template>
  <div id="app">  
    <router-view/>
  </div>
</template>

<script>
import './assets/css/common.less'

export default {
  name: 'App'
}
</script>

<style>
.el-table th { display: table-cell!important; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
