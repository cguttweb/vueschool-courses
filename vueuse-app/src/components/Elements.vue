<template>
  <h3>Elements</h3>
  <div
    style="
      height: 200px;
      overflow: scroll;
      border: 1px solid black;
      width: 400px;
    "
  >
    <h1
      :class="{ 'fade-in': headerIsVisible }"
      style="margin: 300px 0"
      ref="header"
    >
      Hello world
    </h1>
  </div>
  {{ headerIsVisible }}
  <p>Window width is {{ width }} and height is {{ height }}</p>
  <p>Focused: {{ focused }}</p>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  useWindowSize,
  useWindowFocus,
  useIntersectionObserver,
} from '@vueuse/core'
const { height, width } = useWindowSize()
const focused = useWindowFocus()
const header = ref(null)
const headerIsVisible = ref(false)

useIntersectionObserver(header, ([{ isIntersecting }]) => {
  headerIsVisible.value = isIntersecting
})
</script>

<style scoped></style>
