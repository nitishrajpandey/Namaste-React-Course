
function amountReducer(state = { amount: 0 }, action) {

    if (action.type == "incByAmount") {
        if (action.payload > 0) {
            return { amount: state.amount + action.payload }
        }
    }
    else if (action.type == "increment") {
        return { amount: state.amount + 1 }
    }
    else if (action.type == "decrement") {
        return { amount: state.amount - 1 }
    }

    return state;
}

export default amountReducer;