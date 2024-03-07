import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"


// create reducer function 

function reducer(state = { amount: 1 }, action) {
    if (action.type === "increment") {
        return { amount: state.amount + 1 }
    }
    else if (action.type === "decrement") {
        return { amount: state.amount - 1 }
    }
    else if (action.type === "incrementByAmount") {
        return {
            amount: state.amount + action.payload
        }
        return state
    }
}


// create store 

const store = createStore(reducer, applyMiddleware(logger.default))


// check global state

// store.subscribe(() => {
//     console.log(store.getState());

// })


// Action creator

function increment() {
    return { type: "increment" }
}

function decrement() {
    return { type: "decrement" }
}

function incrementByAmount(value) {
    return { type: "incrementByAmount", payload: value }
}





// dispatch 

setInterval(() => {

    // store.dispatch(increment)
    // store.dispatch(decrement)
    store.dispatch(incrementByAmount(5))
}, 2000)

