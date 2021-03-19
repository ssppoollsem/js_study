import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // counter라는 state 속성을 추가
    state: {
        counter: 0
    },
    getters: {
        getCounter: function(state) {
            return state.counter;
        }
    },
    mutations: {
        addCounter: function(state, payload) {
            return state.counter++;
        }
    },
    actions: {
        addCounter: function(context) {
            // commit의 대상인 addCounter 는 mutations의 메서드를 의미한다.
            return context.commit('addCounter');
        },

        getServerData: function(context) {
            return axios.get('saple.json').then(function(){

            });
        },
        delayFewMinutes: function(context) {
            return setTimeout(function(){
                commit('addCounter');
            },1000);
        }

    }
})