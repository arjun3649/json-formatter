<script setup>
import { ref } from 'vue'

const value = ref('')
const formattedVal = ref('')

function format(e) {
  try {
    formattedVal.value = JSON.stringify(JSON.parse(e.target.value), null, 2)
    value.value = e.target.value
  } catch (er) {
    window.alert(er, 'enter a valid json')
  }
}

function copy() {
  if (value.value != '') {
    navigator.clipboard.writeText(formattedVal)
    window.alert('copied to clipboard')
  } else {
    window.alert('please enter a json ')
  }
}
function reset() {
  ;(formattedVal.value = ''), (value.value = '')
}
</script>

<template class="body">
  <div class="textarea">
    <div class="inputbox">
      <textarea
        v-model="value"
        @change="format"
        rows="70"
        cols="60"
        placeholder="enter your json"
      ></textarea>
    </div>
    <div class="button">
      <button class="button" @Click="format(e)">beautify</button>
      <button class="button" @click="copy()">copy</button>
      <button class="button" @click="reset()">reset</button>
    </div>
    <div class="outputbox">
      <textarea v-model="formattedVal" rows="70" cols="70" disabled></textarea>
    </div>
  </div>
</template>
<style scoped>
.textarea {
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}
.inputbox {
  margin-left: 10%;
}
.outputbox {
  margin-left: 8px;
}
.button {
  height: 20px;
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
