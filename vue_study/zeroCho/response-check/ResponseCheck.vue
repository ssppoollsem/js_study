<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">
            {{}}
        </div>
        <div>
            <div>평균시간: {{}}</div>
            <button @click="onReset">리셋 </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            result: [],
            state: 'waiting',

        }
    },
    methods: {
        onReset() {

        },
        onClickScreen() {
            if(this.state === 'waiting') {
                this.state = 'ready';
            } else if(this.state == 'ready') {
                this.state = 'now';
            } else if(this.state === 'now') {
                this.state = 'waiting'
            }
        }
    }
}
</script>
<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: #fff;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>