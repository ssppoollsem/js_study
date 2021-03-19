<template>
    <!-- Todoinput -->
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo" />
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" arial-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
// Modal.vue 불러오기
import Modal from './common/Modal.vue';

export default {
    components: { Modal },
    data() {
        return {
            newTodoItem: '',
            showModal: false //모달 동작을 위한 플래그 값
        }
    },
    methods: {
        addTodo() {
            // console.log(this.newTodoItem);
            if(this.newTodoItem !== '') {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                // localStorage.setItem(value, value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal; // 텍스트 미입력시 모달 동작
            }
        },
        // 단일 책임 원칙에 따른다. (함수 하나가 하나의 기능만 담당하도록 설계하는 객체 지향 프로그래밍의 디자인 패턴)
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    
        input {
            border-style: none;
            font-size: 0.9rem;
        }
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: #fff;
        vertical-align: middle;
    }
</style>