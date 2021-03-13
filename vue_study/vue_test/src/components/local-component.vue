<template>
    <div>
        <button @click="showTitle">Click</button>
        <span>{{ title }}</span>
    </div>
</template>

<script>
    export default {
        name: 'local-component',
        data() {
            return {
                title: void 0
            }
        },
        methods: {
            showTitle() {
                this.title = 'Local Component!!'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>