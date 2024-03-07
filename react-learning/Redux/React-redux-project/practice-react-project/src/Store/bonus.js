
function bonusReducer(state = { point: 0 }, action) {
    if (action.type == "incrementPoint") {
        return { point: state.point + 1 }
    }
    return state
}


export default bonusReducer;