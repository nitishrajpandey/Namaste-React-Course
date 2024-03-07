// combineReducers is use to combine the reducer
import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import amountReducer from "./amount"
import bonusReducer from "./bonus"
import initalReducer from "./inital";




// create store
const store = createStore(combineReducers({
    amount: amountReducer,
    bonus: bonusReducer,
    inital: initalReducer
}), applyMiddleware(thunk));


export default store;