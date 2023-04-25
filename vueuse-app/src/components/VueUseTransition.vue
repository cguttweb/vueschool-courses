<template>
  <div>
    <div class="loading" :style="`width:${animatePercent}%; background:${bgcolour}`"></div>
    <p>useTransition</p>
    {{ Math.floor(animatePercent) }}
    <button @click="load">Load</button>
    <button @clicked="disabled = true">Disable</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTransition, TransitionPresets } from '@vueuse/core';

const percent = ref(0)
const disabled = ref(false)
const bgcolour = ref('teal')
const animatePercent = useTransition(percent, {
  // provide custom transitions
  transition: TransitionPresets.easeInOutCubic,
  duration: 2000,
  // can add disabled to disable the transition when tied to boolean variable
  disabled,
  onStarted(){},
  onFinished(){
    bgcolour.value = 'green'
  }
})

const load = () => {
  percent.value = 100
}

</script>

<style scoped>
.loading {
  height: 10px;
}
</style>