const intialValue = {
    value: 0,
    pending: false,
    error: false
}

function initalReducer(state = intialValue, action) {
    if (action.type === "getAccUserPending") {
        return { pending: true }
    }
    else if (action.type === "getAccUserFulfilled") {
        return { value: action.payload }
    }
    else if (action.type === "getAccUserRejected") {
        return { error: true }

    }
    return state
}


export default initalReducer;