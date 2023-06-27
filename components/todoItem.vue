<!-- ======================================================================
Project Name    : TODO
Encoding        : UTF-8
Creation Date   : 2023.Jun.28 
Copyright © 2023 Iizuka All rights reserved.
====================================================================== -->

<script setup lang="ts">
import { Todo } from '../utils/interface';

const props = defineProps<{todo:Todo, removeTodo: any}>()

</script>


<template>
    <input type="checkbox" v-model="todo.done">
    <span :class="{done: todo.done}">{{ todo.title }}</span>
    <button @click="removeTodo(todo.id)">X</button>
</template>

<style>
.done{
  text-decoration: line-through;
}
</style>

