<template>
  <div>
    <p>UseDark</p>
    <button @click="toggleDark()">Toggle Dark Mode</button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style>
.dark {
  background-color: #333;
  color: #fff;
}
</style>
