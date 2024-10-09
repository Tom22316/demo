<template>
  <div>
    <button @click="currentView = 'HelloWorld'">Axios简单使用</button>
    <button @click="currentView = 'SecondaryAxios'">Axios二次封装</button>
    <button @click="currentView = 'TableDemo'">表格Demo</button>
  </div>
  <component :is="currentView" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondaryAxios from './components/SecondaryAxios.vue';
import TableDemo from './components/TableDemo.vue';

export default {
  name: 'App',
  data(){
    return {
      currentView:null
    }
  },  
  components: {
    HelloWorld,
    SecondaryAxios,
    TableDemo
  }
}
</script>

<style>
</style>
