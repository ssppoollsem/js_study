<template>
    <!-- TodoFooter -->
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
    export default {
        methods: {
            clearTodo() {
                this.$emit('removeAll'); // 로컬스토리지 전체삭제
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        border-radius: 4px;
        margin: 0 auto;
        cursor: pointer;
    }

    .clearAllBtn {
        color: #e20303;
        display: block;
    }
</style>