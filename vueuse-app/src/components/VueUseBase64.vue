<template>
  <p>useBase64</p>
  <!-- @change used to set image to first and only event -->
  <input
    type="file"
    accept="image/jpeg, image/png"
    @change="image = $event.target.files[0]"
  /><br /><br />
  <img v-if="image" :src="base64" alt="" width="200" />
</template>

<script setup>
import { ref } from 'vue'
// this supports canvas, images, files and buffers
import { useBase64 } from '@vueuse/core'

const image = ref('')
const { base64 } = useBase64(image)
</script>

<style scoped></style>
