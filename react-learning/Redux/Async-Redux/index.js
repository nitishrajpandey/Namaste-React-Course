import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";




// create reducer

function reducer(state = { amount: 1 }, action) {
    if (action.type === "init") {
        return { amount: action.payload }
    }
    return state
}


// create store 
const store = createStore(reducer, applyMiddleware(logger.default, thunk))


// action function 




// async function getUser(dispatch, getUser) {
//     const { data } = await axios.get("https://api.github.com/users/nitishrajpandey")
//     return (dispatch(inital(data.public_repos)))
// }



function getUser(userName) {
    return async (dispatch, getUser) => {
        const { data } = await axios.get(`https://api.github.com/users/${userName}`)
        return (dispatch(inital(data.public_repos)))
    }
}



function inital(value) {
    return {
        type: "init",
        payload: value
    }
}




// dispatch
setTimeout(() => {
    store.dispatch(getUser("Abhishekranjan-01"))
}, 2000)