

<script setup>


 import {RouterLink} from "vue-router";

</script>


<template>
    
    
   
        <main class="main">
  <aside class="sidebar">
    <nav class="nav">
      <ul>
        <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 30px;align-self: center;">DEVTA</h1>
         <RouterLink :to="{name:'jsoninput'}"><button class="button">json-formattor</button></RouterLink>
      </ul>
    </nav>
  </aside>

  
</main>
        
         
           
        
      


   
    
</template>
<style scoped>




.sidebar {
  position: fixed;
  width: 15%;
  height: 100vh;
  background: #312450;
  font-size: 0.65em;
  padding-right: 50px;
}
.button{
    font-size: 20px;
    width: 200px;
    height: 50px;
    margin-left: 1px;
    border-radius: 6px;
    outline: none;

}




</style>


