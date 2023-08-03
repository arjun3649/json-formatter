<script setup>

import {RouterView} from 'vue-router'

import SideBar from './components/Side-Bar.vue';


</script>

<template>
  <div id="app"></div>
  <SideBar/>
  <RouterView/>
  
  

  
</template>
<style>
.body{
  overflow: hidden;
}

</style>



