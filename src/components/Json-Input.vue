

<script setup>
import {ref} from 'vue';
const value = ref("");
const formattedVal = ref("");

function format(e){
    formattedVal.value = JSON.stringify(JSON.parse(e.target.value), null, 4);
    value.value = e.target.value;
}
function copy(){
    if(formattedVal.value!="")
    {navigator.clipboard.writeText(formattedVal.value);
    window.alert("copied to clipboard");
    }
    else{
        window.alert("please enter a json file");
    }

    
}



</script>


<template class="body">
    <div class="textarea">
        <div class="inputbox"><textarea v-model="value" @change="format" rows="70" cols="60" placeholder="put a json file and then click on the right box"></textarea></div>
        <div class="outputbox"><textarea v-model="formattedVal"  rows="70" cols="60" disabled></textarea></div>
        <button class="button" @click="copy()">copy</button>
        
        
        
        

    </div>
</template>
<style>
.textarea{
    
    display: flex;
    flex-direction: row;
    margin-left: 10%;
}
.inputbox{
    margin-left: 10%;
}
.outputbox{
    margin-left: 40px;
}
.button{
    height: 50px;
    width: 100px;
    margin-left: 10px;
}

</style>



