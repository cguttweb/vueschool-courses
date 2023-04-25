<template>
  <div>
    <!-- <label for="name">Name:</label>
    <input type="text" name="name" id="name" v-model="name" /> -->
    <!-- prettierignore -->
    <input
      type="text"
      name="todo"
      id="todo"
      placeholder="Add New Todo Item"
      v-model="newToDo"
    />
    <button
      @click="
        todos.unshift()
        newToDo = ''
      "
    >
      Add New ToDo
    </button>

    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>

    <pre>{{ history }}</pre>
  </div>
</template>

<script setup>
import { useRefHistory, useDebouncedRefHistory } from '@vueuse/core'
import { ref } from 'vue'

const newToDo = ref('')
const toDos = ref([])
// const { history, undo, redo } = useRefHistory(name)

// const { history, undo, redo } = useDebouncedRefHistory(name, {
//   // number of milliseconds to delay before new entry
//   debounce: 1000,
// })
</script>

<style scoped></style>
