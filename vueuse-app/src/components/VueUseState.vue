<script setup>
import { ref } from "vue";
import { useRefHistory, useDebouncedRefHistory } from "@vueuse/core";

const name = ref("");
const newToDo = ref("");
const todos = ref([]);
// const { history, undo, redo } = useRefHistory(name);
const { history, undo, redo } = useDebouncedRefHistory(name, {
  // wait a second
  debounce: 1000,
});
</script>

<template>
  <div>
    <input type="text" v-model="name" />
    <button
      @click="
        todos.unshift(newToDo);
        newToDo = '';
      "
    >
      Create ToDo
    </button>
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
    <ul>
      <li v-for="todo in todos" :key="item.id">{{ todo }}</li>
    </ul>
    <pre>{{ history }}</pre>
  </div>
</template>

<style scoped></style>
