export const state = () => ({
    me: null,
    followerList: [],
    followingList: [],
    hasMoreFollowing: true,
    hasMoreFollower: true,
});

// 서버 쪽 작업 전 임의로 팔로잉,팔로워 등 제한을 둠
const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;

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
    loadFollowings(state) {
        const diff = totalFollowings - state.followingList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000)
        }));
        state.followingList = state.followingList.concat(fakeUsers);
        state.hasMoreFollowing = fakeUsers.length === limit;
    },
    loadFollowers(state) {
        const diff = totalFollowers - state.followerList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000)
        }));
        state.followerList = state.followerList.concat(fakeUsers);
        state.hasMoreFollower = fakeUsers.length === limit;
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
    loadFollowings({ commit, state }, payload) {
        if(state.hasMoreFollowing) {
            commit('loadFollowings');
        }
    },
    loadFollowers({ commit, state }, payload) {
        if(state.hasMoreFollower) {
            commit('loadFollowers');
        }
    },
};
