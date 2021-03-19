<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      // 로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem); // 로컬스토리지에서 삭제
      this.todoItems.splice(index, 1); // 화면에서 삭제
    }
  },
  created() {
      if(localStorage.length > 0) {
          for (var i = 0; i < localStorage.length; i++) {
              this.todoItems.push(localStorage.key(i))
          }
      }
  },
  components: {
    'TodoHeader' : TodoHeader, // 애플리케이션 이름 표시
    'TodoInput' : TodoInput, // 할 일 입력 및 추가
    'TodoList' : TodoList, // 할 일 목록 표시 및 특정 할 일 삭제
    'TodoFooter' : TodoFooter // 할 일 모두 삭제 
  }
}
</script>

<style lang="scss">
  body {
        text-align: center;
        background-color: #f6f6f6;
    }

    input {
        border-style: groove;
        width: 200px;
    }

    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>
