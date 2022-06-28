import { createStore, applyMiddleware,compose } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
const middleware = thunk
const init ={}
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;