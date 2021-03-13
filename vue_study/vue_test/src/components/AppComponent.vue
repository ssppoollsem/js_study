<template>
    <h1>Hello from the AppComponent</h1>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            addTodo(e) { // todo 추가함수
                e.preventDefault();
                const todo = {
                    text: document.querySelector('input.input-todo').value,
                    completed: false
                };
                this.todos.push(todo);
            },
            completeTodo(index) { // todo 완료여부체크
                this.todos[index].completed = !this.todos[index].completed;
            },
            deleteTodo(index) { // todo 삭제함수
                this.todos.splice(index, 1);
            }
        },
        data() { // default state를 return  해주는 함수
            return {
                todos: [
                    {
                        text: 'test-todo1',
                        completed: false
                    },
                    {
                        text: 'test-todo2',
                        completed: false
                    },
                    {
                        text: 'test-todo3',
                        completed: false
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>