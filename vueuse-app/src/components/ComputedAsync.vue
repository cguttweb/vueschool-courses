<template>
  <div>
    <p>Computed Async</p>
    <input type="number" v-model="id" />
    <pre>
    {{ post }}
    </pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { computedAsync } from '@vueuse/core'
const id = ref(1)
const url = computed(
  () => `https://jsonplaceholder.typicode.com/posts/${id.value}`
)

// takes async function as 1st arg, default value is 2nd arg
const post = computedAsync(async () => {
  const res = await fetch(url.value)
  return res.json()
}, null)
</script>

<style scoped></style>
