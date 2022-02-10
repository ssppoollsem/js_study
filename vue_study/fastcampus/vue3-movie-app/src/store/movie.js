//  영화 검색에 관한 데이터를 취급
import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const _defaultMessage = 'Search for the movie title!';

export default {
    // module
    namespaced: true,
    // data
    state: () => ({
        movies: [],
        message: _defaultMessage,
        loading: false
    }),
    // computed
    getters: {},
    // methods
    // 변이
    mutations: {
        updateState(state, payload) {
            // [ 'movies', 'message', 'loading' ]
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }, 
        resetMovies(state) {
            state.movies = []
            state.message = _defaultMessage
            state.loading = false
        }
    },
    // 비동기
    actions: {
        async searchMovies({state, commit}, payload) {
            if(state.loading) return

            commit('updateState', {
                message: '',
                loading: true,
                theMovie: {}
            })
            try {  
                const res =  await _fetchMovie({
                    ...payload,
                    page: 1
                })
                const { Search, totalResults } = res.data;
                commit('updateState', {
                    movies: _uniqBy(Search,'imdbID')
                })
    
                const total = parseInt(totalResults, 10);
                const pageLength = Math.ceil(total / 10);
                
                // 추가요청
                if(pageLength > 1) {
                    for(let page = 2; page <= pageLength; page++ ) {
                        if(page > (payload.number / 10)) break
                        const res =  await _fetchMovie({
                            ...payload,
                            page
                        })
                        const { Search } = res.data;
                        commit('updateState', {
                            movies: [...state.movies, ..._uniqBy(Search,'imdbID')]
                        })
                    }
                }
            } catch({ message }) {
                commit('updateState', {
                    movies: [],
                    message
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        },
        async searchMovieWithId({ state, commit }, payload) {
            if(state.loading) return

            commit('updateState', {
                theMovie: {},
                loading: true
            })
            try {
                const res = await _fetchMovie(payload);
                console.log(res)
                commit('updateState', {
                    theMovie: res.data
                })
            } catch(error) {
                commit('updateState', {
                    theMovie: {}
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        }
    }
}

// _는 현재파일 내부에서만 처리된다는 것을 의미
async function _fetchMovie(payload) {
    return await axios.post('/.netlify/functions/movie', payload)
}