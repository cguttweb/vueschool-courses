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

<style lang="css">
.username {
  color: #dcae1d;
  font-size: 4rem;
}
</style>
