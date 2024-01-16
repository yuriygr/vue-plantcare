export default {
  namespaced: true,
  state () {
    return {
      plants: [],
      plant: false,

      loading: false,
      error: false
    }
  },
  mutations: {
    'SET_PLANTS'(state, payload) {
      state.plants = payload
    },
    'SET_PLANT'(state, payload) {
      state.plant = payload
    },

    'SET_LOADING'(state, payload) {
      state.loading = payload
    },
    'SET_ERROR'(state, payload) {
      state.error = payload
    },
  },
  actions: {
    init({ commit, state }) {
      commit('SET_PLANTS', JSON.parse(localStorage.getItem('plants')) || [])
    },

    fetchItems({ commit }, { lang }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', false)

      return this.$api.get('plants', { lang })
      .then(response => {
        commit('SET_PLANTS', response)
      })
      .catch(error => {
        commit('SET_ERROR', error)
      })
      .then(_ => commit('SET_LOADING', false))
    },

    fetchItem({ state, commit }, { id }) {
      let plants = state.plants.flatMap(letter => letter.plants)
      let plant = plants.filter(plant => plant.plant_id == id)[0]
      commit('SET_PLANT', plant)

      return this.$api.get(`plants/${id}`)
      .then(response => {
        commit('SET_PLANT', response)
      })
      .catch(error => {
        commit('SET_ERROR', error)
      })
    },
  
    clearItem({ commit }) {
      commit('SET_PLANT', false)
    }
  },
  getters: {
    
  }
}