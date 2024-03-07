import { createStore } from "redux";

// create initial value of counter
const INITIAL_VALUE = {
    counter: 0,
    privacy: false
};



// make a reducer function 

const counterReducer = (store = INITIAL_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return { ...store, counter: store.counter + 1 }
    } else if (action.type === "DECREMENT") {
        return { ...store, counter: store.counter - 1 }
    } else if (action.type === "PRIVACY") {
        return { ...store, privacy: !store.privacy }
    } else if (action.type === "ADD") {
        return { ...store, counter: store.counter + Number(action.payload.num) }
    } else if (action.type == "SUB") {
        return { ...store, counter: store.counter - Number(action.payload.num) }
    }
    return store
}




// creating store
const counterStore = createStore(counterReducer);

export default counterStore;