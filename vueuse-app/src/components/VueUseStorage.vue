<template>
  <div>
    <p>useLocalStorage and useSessionStorage</p>
    <label for="name">Name</label>
    <input type="text" name="name" v-model="name" />
    <label for="favfood">Favourite Food:</label>
    <input type="text" name="favfood" v-model="myFavFood" />
  </div>
</template>

<script setup>
import { useLocalStorage, useSessionStorage } from '@vueuse/core'
const name = useLocalStorage('name', 'Chloe')
const myFavFood = useSessionStorage('favfood', 'pasta')
</script>

<style></style>
