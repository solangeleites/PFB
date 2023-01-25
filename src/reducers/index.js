import { combineReducers } from "redux";
import { shopReducer } from "./counterReducer";

const reducer = combineReducers({
    shop: shopReducer,
    
});

export default reducer;