<template>
  <div>
    <p>useColorMode:</p>
    <select>
      <option value="dim" @click="colorMode = 'dim'">Dim</option>
      <option value="cafe" @click="colorMode = 'cafe'">Cafe</option>
      <option value="coffee" @click="colorMode = 'coffee'">Coffee</option>
    </select>
  </div>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode({
  modes: {
    dim: 'dim',
    cafe: 'cafe',
    coffee: 'coffee',
  },
})
</script>

<style scoped>
.dim {
  background: #999;
  color: #333;
}

.cafe {
  background: #d48b66;
  color: #333;
}
.coffee {
  background: #eea480;
  color: #773210;
}
</style>
