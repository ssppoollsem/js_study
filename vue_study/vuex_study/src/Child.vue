<template>
    <div>
        <hr>
        Child counter : {{ childCounter }} <br />
        <button>+</button>
        <button>-</button>
    </div>
</template>

<script>
    export default {
        // props: ["num"]
        computed: {
            childCounter() {
                return this.$store.getters.getCounter;
            }
        }
    }
</script>

<style scoped>

</style>