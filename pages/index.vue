<!-- ======================================================================
Project Name    : TODO
Encoding        : UTF-8
Creation Date   : 2023.Jun.28 
Copyright © 2023 Iizuka All rights reserved.
====================================================================== -->

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from "pinia";
import { useTodos } from '~/store/todo';
import  todoItem  from '../components/todoItem.vue';
const todosStore = useTodos();
const {addTodo, removeTodo} = todosStore;
// ストアの値を参照するためのref
const { todos } = storeToRefs(todosStore);
// 完了したtodoを隠すための真偽値
const isHide = ref<boolean>(false);
// inputフィールドの値を参照するためのref
const newTodo = ref<string>('');
// computedでレンダリング毎にisHideの値に応じてtodosの値をフィルタリングする
const filteredTodos = computed(() => {
  if(isHide.value){
    // 偽の値だけのtodoを抽出
    return todos.value.filter((e) => !e.done)
  }else{
    return todos.value
  }
});

</script>

<template>
  <!-- preeventの設定で送信後の自動リロードをキャンセル、addTodoでstoreに新規追加＆newTodoを初期化 -->
  <form @submit.prevent="addTodo(newTodo); newTodo = ''">
    <!-- 入力された値のとnewtodoRefを同期 -->
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <todoItem :todo="todo" :removeTodo="removeTodo"></todoItem>
    </li>
  </ul>
  <!-- isHideの真偽値が反転するたびにfilteredTodosの処理が実行される -->
  <button @click="isHide = !isHide">{{ isHide ? "Show all" : "Hide completed" }}</button>
</template>


