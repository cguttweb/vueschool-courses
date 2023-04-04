<script setup>
import { ref } from "@vueuse/core";
import { useTimeout, useTimeoutFn } from "@vueuse/core";
import VueUseState from "./components/VueUseState.vue";
// const { ready, start, stop, isPending } = useTimeout(3000, { controls: true });
const showAlert = ref(true);
const { start, stop, isPending } = useTimeoutFn(() => {
  showAlert.value = false;
}, 3000);
</script>

<template>
  <transition appear>
    <div v-if="showAlert" class="alert" @mouseenter="stop" @mouseout="start">
      Your post has saved
      <button @click="stop">x</button>
    </div>
  </transition>
</template>

<style scoped></style>
