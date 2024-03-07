import { createStore } from "redux"

// intial value 

const INITIAL_VALUE = {
    counter: 0
};



// create a reducer function and pass in crearte store 

const counterReducer = (store = INITIAL_VALUE, action) => {

    if (action.type === "ADDITION") {
        return { counter: store.counter + 1 }
    } else if (action.type === "SUBTRACTION") {
        return { counter: store.counter - 1 }

    }

    return store
}



// creating a store
const counterStore = createStore(counterReducer)

export default counterStore


