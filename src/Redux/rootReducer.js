import {combineReducers} from "redux";
import shopReducer from "./Shoping/shop_reducer"

const rootReducer = combineReducers({
    shop: shopReducer

})
export default rootReducer