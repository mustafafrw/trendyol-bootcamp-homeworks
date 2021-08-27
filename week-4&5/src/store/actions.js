import axios from 'axios'

export default {
    
    async fetchStarships({ commit }) {
        await axios.get(`https://swapi.dev/api/starships/`).then(response => {
            let { next, results } = response?.data
            commit('setStarships', results)
            commit('setNext', next)
        });
    },
    async searchStarships({ commit }, query) {
        await axios.get(`https://swapi.dev/api/starships/?search=${ query }`).then(response => {
            let { next, results } = response?.data
            commit('setStarships', results)
            commit('setNext', next)
        });
    },
    async loadMore({ commit, state }) {
        if(state.next){
            await axios.get(state.next).then(response => {
                let { next, results } = response?.data
                commit('pushStarships', results)
                commit('setNext', next)
            });
        }
    },
    async fetchDetail({ commit }, starShipId) {
        await axios.get(`https://swapi.dev/api/starships/${ starShipId }`).then(response => {
            commit('setDetail', response.data)
        });
    }
};
