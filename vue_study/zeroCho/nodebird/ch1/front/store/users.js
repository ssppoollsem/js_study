export const state = () => ({
    me: null,
});

// 동기적작업
export const mutations = {
    setMe(state, payload) {
        // setMe에는 비동기 요청을 쓰면 안됨
        state.me = payload;
    },
};

// 비동기작업
export const actions = {
    signUp({commit, state}, payload) {
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({commit}, payload) {
        commit('setMe', payload);
    },
    logOut({commit}, payload) {
        commit('setMe', null);
    }
}