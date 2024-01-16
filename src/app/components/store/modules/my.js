const plants = {
  namespaced: true,
  state() {
    return {
      data: [],

      filters: {
        query: '',
        order: 'asc',
        limit: 10,
        page: 1
      },

      loading: false,
      error: false
    }
  },
  mutations: {
    'SET_DATA'(state, payload) {
      state.data = payload
    },
    
    'SET_FILTERS'(state, payload) {
      state.filters = payload
    },
    'UPDATE_FILTERS'(state, payload) {
      state.filters = Object.assign(state.filters, payload)
    },

    'SET_LOADING'(state, payload) {
      state.loading = payload
    },
    'SET_ERROR'(state, payload) {
      state.error = payload
    }
  },
  actions: {
    fetch({ state, commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', false)

      this.$api.get('my/plants', state.filters)
      .then(result => {
        commit('SET_DATA', result)
      })
      .catch(error => {
        commit('SET_ERROR', error)
      })
      .then(_ => commit('SET_LOADING', false))
    },
    setFilters({ commit }, payload) {
      commit('UPDATE_FILTERS', payload)
    }
  },
  getters: {
    emptyQuery(state) {
      return state.filters.query === ''
    },
    searching(state) {
      return state.filters.query != ''
    },
  }
}

const lists = {
  namespaced: true,
  state() {
    return {
      data: [],

      filters: {
        query: '',
        order: 'asc',
        limit: 10,
        page: 1
      },

      loading: false,
      error: false
    }
  },
  mutations: {
    'SET_DATA'(state, payload) {
      state.data = payload
    },
    
    'SET_FILTERS'(state, payload) {
      state.filters = payload
    },
    'UPDATE_FILTERS'(state, payload) {
      state.filters = Object.assign(state.filters, payload)
    },

    'SET_LOADING'(state, payload) {
      state.loading = payload
    },
    'SET_ERROR'(state, payload) {
      state.error = payload
    }
  },
  actions: {
    fetch({ state, commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', false)

      this.$api.get('my/lists', state.filters)
      .then(result => {
        commit('SET_DATA', result)
      })
      .catch(error => {
        commit('SET_ERROR', error)
      })
      .then(_ => commit('SET_LOADING', false))
    },
    setFilters({ commit }, payload) {
      commit('UPDATE_FILTERS', payload)
    }
  },
  getters: {
    emptyQuery(state) {
      return state.filters.query === ''
    },
    searching(state) {
      return state.filters.query != ''
    },
  }
}

const calendar = {
  namespaced: true,
  state() {
    return {
      data: [],

      filters: {
        order: 'asc',
        limit: 10,
        page: 1
      },

      loading: false,
      error: false
    }
  },
  mutations: {
    'SET_DATA'(state, payload) {
      state.data = payload
    },
    
    'SET_FILTERS'(state, payload) {
      state.filters = payload
    },
    'UPDATE_FILTERS'(state, payload) {
      state.filters = Object.assign(state.filters, payload)
    },

    'SET_LOADING'(state, payload) {
      state.loading = payload
    },
    'SET_ERROR'(state, payload) {
      state.error = payload
    }
  },
  actions: {
    fetch({ state, commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', false)

      this.$api.get('my/calendar', state.filters)
      .then(result => {
        commit('SET_DATA', result)
      })
      .catch(error => {
        commit('SET_ERROR', error)
      })
      .then(_ => commit('SET_LOADING', false))
    },
    setFilters({ commit }, payload) {
      commit('UPDATE_FILTERS', payload)
    }
  },
  getters: { }
}


export default {
  namespaced: true,
  modules: { calendar, lists, plants  },
  state() {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {}
}