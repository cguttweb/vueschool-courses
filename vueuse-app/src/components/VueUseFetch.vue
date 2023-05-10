<template>
  <div>
    <p>VueUseFetch</p>
    <div v-if="error" style="color: red">Error: {{ error }}</div>
    <div v-else-if="isFetching" style="color: green">Loading...</div>
    <pre>{{ data }}</pre>
    <input type="number" v-model="id" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'

const id = ref(1)
const url = computed(() => {
  return `http://jsonplaceholder.typicode.com/todos/${id.value}`
})

const { isFetching, data, error } = useFetch(url, {
  // automatically rerun if url changes to something reactive e.g. prop
  refetch: true,
})
</script>
