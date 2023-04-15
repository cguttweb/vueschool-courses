<template>
  <div>
    <p>usePageLeave</p>
    <p>Has left page: {{ isLeft }}</p>
  </div>
</template>

<script setup>
import { usePageLeave } from '@vueuse/core'

const isLeft = usePageLeave()
</script>

<style scoped></style>
