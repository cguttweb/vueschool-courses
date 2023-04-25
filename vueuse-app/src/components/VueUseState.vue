<template>
  <div style="padding-top: 20px">
    <!-- <label for="name">Name:</label>
    <input type="text" name="name" id="name" v-model="name" /> -->
    <input
      type="text"
      name="todoitem"
      placeholder="Add New Todo Item"
      v-model="newTodo"
    />
    <button
      @click="todos.unshift(newTodo);  
        newTodo = '';">
      Add New ToDo
    </button>

    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>

    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
    <pre>{{ history }}</pre>
  </div>
</template>

<script setup>
import { useRefHistory, useDebouncedRefHistory } from '@vueuse/core'
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])
// const { history, undo, redo } = useRefHistory(name)

// const { history, undo, redo } = useDebouncedRefHistory(name, {
//   // number of milliseconds to delay before new entry
//   debounce: 1000,
// })

const { history, undo, redo } = useRefHistory(todos, {
  // this is needed for use with arrays and objects to track teir history
  deep: true,
  // to limit history
  capacity: 15
})
</script>

<style scoped></style>
