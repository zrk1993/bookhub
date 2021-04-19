const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_LOADING = 'SET_PAGE_LOADING'

let state = {
  currentPage: null,
  pageLoading: false
}
export default {
  namespaced: true,
  state,
  mutations: {
    [SET_CURRENT_PAGE] (state, data) {
      state.currentPage = data
    },
    [SET_PAGE_LOADING] (state, data) {
      state.pageLoading = data
    }
  },
  actions: {
    before ({ commit }, { to }) {
      commit(SET_CURRENT_PAGE, to)
    },
    after ({ commit }, { to }) {
      commit(SET_CURRENT_PAGE, to)
    },
    loadingBefore ({ commit }, params) {
      commit(SET_PAGE_LOADING, params)
    },
    loadingAfter ({ commit }, params) {
      commit(SET_PAGE_LOADING, params)
    }
  }
}
