<template>
  <!-- https://vueschool.io/lessons/how-to-extend-a-vueuse-composable -->
  <img v-for="image in images" style="display: none" :src="image" />
  <p>Create simple image carousel with useCycleList</p>
  <div class="carousel">
    <Transition>
      <img :src="state" alt="" />
    </Transition>
  </div>
  <br />
  <br />
  <button @click="prev()">Prev</button>
  <button @click="next()">Next</button>
</template>

<script setup>
// extended useCycleList composable
import { computed } from 'vue'
import { useAppCycleList } from '../useAppCycleList'
import { useIntervalFn } from '@vueuse/core'
const images = [
  'https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
  'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1683444805823-3de8d2fd1c80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
]

const { state, next, prev, isForward, isBackward } = useAppCycleList(images)

useIntervalFn(() => next(), 2000)

const direction = computed(() => {
  if (isForward) {
    return {
      from: `translateX(100%)`,
      to: `translateX(-100%)`,
    }
  } else {
    return {
      from: `translateX(100%)`,
      to: `translateX(-100%)`,
    }
  }
})
</script>

<style scoped>
img {
  height: 100px;
  position: absolute;
  width: 20rem;
}

.carousel {
  position: relative;
}

button {
  position: relative;
  top: 80px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

.v-enter-from {
  transform: v-bind('direction.from');
}

.v-leave-to {
  transform: v-bind('direction.to');
}
</style>
