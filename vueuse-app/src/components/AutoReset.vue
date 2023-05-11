<template>
  <p>RefAutoReset</p>
  <Transition>
    <div v-if="showAlert">Your post has been saved</div>
  </Transition>
  <button @click="showAlert">Show Alert</button>
</template>

<script setup>
import { refAutoReset } from '@vueuse/core'
const showAlert = refAutoReset(false, 3000)
showAlert.value = true
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
