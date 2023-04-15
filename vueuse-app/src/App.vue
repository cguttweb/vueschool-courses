<template>
  <div>
    <h1>My Vue App</h1>
    <p>Learning to use VueUse composables</p>
    <VueUseAnimation />
    <VueUseColorMode />
    <VueDarkMode />
    <VueUsePageLeave />
    <VueUseState />
  </div>
</template>

<script setup>
import VueDarkMode from "./components/VueDarkMode.vue";
import VueUseAnimation from "./components/VueUseAnimation.vue";
import VueUseColorMode from "./components/VueUseColorMode.vue";
import VueUsePageLeave from "./components/VueUsePageLeave.vue";
import VueUseState from "./components/VueUseState.vue";
</script>

<style lang="scss" scoped></style>
