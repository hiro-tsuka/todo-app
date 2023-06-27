<!-- ======================================================================
Project Name    : TODO
Encoding        : UTF-8
Creation Date   : 2023.Jun.28 
Copyright © 2023 Iizuka All rights reserved.
====================================================================== -->

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from "pinia";
import { useTodos } from '~/store/todo';
import  todoItem  from '../components/todoItem.vue'
const todosStore = useTodos();
const {addTodo, removeTodo} = todosStore;
const { todos } = storeToRefs(todosStore);

const isHide = ref(false);
const newTodo = ref('')

const filteredTodos = computed(() => {
  if(isHide.value){
    return todos.value.filter((e) => !e.done)
  }else{
    return todos.value
  }
})

</script>

<template>
  <form @submit.prevent="addTodo(newTodo); newTodo = ''">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <todoItem :todo="todo" :removeTodo="removeTodo"></todoItem>
    </li>
  </ul>
  <button @click="isHide = !isHide">{{ isHide ? "Show all" : "Hide completed" }}</button>
</template>


