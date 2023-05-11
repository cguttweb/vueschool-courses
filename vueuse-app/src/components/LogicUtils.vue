<template>
  <div>
    <p>Logic Utilities</p>
    {{ isASandwich }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { logicAnd, logicNot, logicOr } from '@vueuse/math'

const hasBread = ref(true)
const isBreadRoll = ref(true)
const filledWithCheese = ref(true)
const hasTwoSlicesOfBread = ref(true)
const isAHotDog = ref(true)
const isASandwich = logicAnd(
  logicOr(hasBread, isBreadRoll),
  filledWithCheese,
  hasTwoSlicesOfBread,
  logicNot(isAHotDog)
)
</script>

<style scoped></style>
