<template>
  <div>
    <p>using reactify</p>
    <input type="text" v-model="myString" />
    {{ myCamelCaseString }}
  </div>
</template>

<script setup>
import { reactify } from '@vueuse/core'
import { ref } from 'vue'
import camelCase from 'lodash/camelCase'

const myString = ref('Hello Everyone')
// const camelCaseString = computed(() => camelCase(string.value))
const rCamelCase = reactify(camelCase)
const myCamelCaseString = rCamelCase(myString)
</script>
