<template>
  <div>
    <h1>My Vue App</h1>
    <p>Learning to use VueUse composables</p>
    <VueUseAnimation />
    <VueUseColorMode />
    <VueDarkMode />
    <VueUsePageLeave />
    <VueUseStorage />
    <VueUseState />
    <VueUseTransition />
    <VueUseFetch />
    <VueOwnFavicon />
  </div>
</template>

<script setup>
import VueDarkMode from './components/VueDarkMode.vue'
import VueUseAnimation from './components/VueUseAnimation.vue'
import VueUseColorMode from './components/VueUseColorMode.vue'
import VueUsePageLeave from './components/VueUsePageLeave.vue'
import VueUseStorage from './components/VueUseStorage.vue'
import VueUseState from './components/VueUseState.vue'
import VueUseTransition from './components/VueUseTransition.vue'
import VueUseFetch from './components/VueUseFetch.vue'
import VueOwnFavicon from './components/VueOwnFavicon.vue'
</script>

<style scoped></style>
