<template>
    <div>
        <button @click="sendEvent()">Print</button>
    </div>
</template>

<script>
    export default {
        name: 'child-component',
        props: {
            parentMessage: {
                type: String,
                default: void 0
            }
        },
        methods: {
            sendEvent () {
                this.$emit('print', this.parentMessage)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>