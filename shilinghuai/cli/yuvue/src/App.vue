<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to 师令怀的vue-cli工程"/>
    <router-link to="/view1">Go to view1</router-link>
     <router-link to="/view2">Go to view2</router-link>
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
     <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
