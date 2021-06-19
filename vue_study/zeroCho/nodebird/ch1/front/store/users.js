export const state = () => ({
    me: null,
    followerList: [{
        id: 1,
        nickname: '나로초'
    }, {
        id: 2,
        nickname: '제로초'
    },{
        id: 3,
        nickname: '삼로초'
    },],
    followingList: [{
        id: 1,
        nickname: '바바초'
    },{
        id: 2,
        nickname: '다로초'
    },{
        id: 3,
        nickname: '가로초'
    },],
});

// 동기적작업
export const mutations = {
    setMe(state, payload) {
        // setMe에는 비동기 요청을 쓰면 안됨
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index, 1);
    },
    addFollower(state, payload) {
        state.followerList.push(payload)
    },
    addFollowing(state, payload) {
        state.followingList.push(payload)

    },
};

// 비동기작업
export const actions = {
    signUp({ commit, state }, payload) {
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({ commit }, payload) {
        commit('setMe', payload);
    },
    logOut({ commit }, payload) {
        commit('setMe', null);
    },
    changeNickname({ commit }, payload) {
        commit('changeNickname', payload);
    },
    addFollowing({ commit }, payload){ 
        commit('addFollowing',payload);
    },
    addFollower({ commit }, payload){
        commit('addFollower ',payload);
    },
    removeFollowing({ commit }, payload) {
        commit('removeFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    },
};
