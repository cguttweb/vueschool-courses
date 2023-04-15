<template>
  <div>
    <p class="username">{{ username }}</p>
  </div>
</template>

<script setup>
defineProps({
  username: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
$size: 50pt;
$yellow: #dcae1d;

.username {
  color: $yellow;
  font-size: $size;
  text-align: center;
}
</style>
