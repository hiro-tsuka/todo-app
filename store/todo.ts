// ======================================================================
// Project Name    : TODO
// Encoding        : UTF-8
// Creation Date   : 2023.Jun.28 
// Copyright © 2023 Iizuka All rights reserved.
// ======================================================================

import { defineStore } from 'pinia';
import { Todo } from '../utils/interface';

export const useTodos = defineStore('todos', {
  state: () => ({
    id: 1,
    todos: [
      // 初期値の定義
      { id: 1, title: 'Learn HTML', done: false },
    ] as Todo[],
  }),
  actions: {
    addTodo(todo: string) {
      // newTodoで渡ってきた値をstoreに追加する関数
      if (todo !== "") {
        this.todos.push({ id: this.id++, title: todo, done: false });
      }
    },
    removeTodo(id: number) {
      // 引数に渡されたidと該当した最初の配列のインデックスをとる
      const index = this.todos.findIndex((todo) => todo.id === id);
      // 上で見つかった配列のインデックスを削除
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
  persist: true,
},);



