export default {
    setStarships(state, payload) {
        state.starships = payload;
    },
    setNext(state, payload) {
        state.next = payload;
    },
    pushStarships(state, payload) {
        payload.forEach(starship => {
            state.starships.push(starship);
        })
    },
    setDetail(state, payload) {
        state.detail = payload;
    }
};
