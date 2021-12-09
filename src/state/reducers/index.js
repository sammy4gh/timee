import {combineReducers} from "redux";
import itemsReducer from "./itemsReducer";
import authReducer from "./authReducer";



const reducers = combineReducers({
    items : itemsReducer,
    auth : authReducer
})

export default reducers;