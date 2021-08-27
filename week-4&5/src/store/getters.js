export default {
    getStarships(state){
        return state.starships;
    },
    getDetail(state){
        return state.detail;
    },
    loadMoreState(state){
        return state.next
    }
};
