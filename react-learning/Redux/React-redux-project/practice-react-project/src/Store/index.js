// combineReducers is use to combine the reducer
import { createStore, combineReducers } from "redux"
import amountReducer from "./amount"
import bonusReducer from "./bonus"




// create store
const store = createStore(combineReducers({
    amount: amountReducer,
    bonus: bonusReducer
}));


export default store;