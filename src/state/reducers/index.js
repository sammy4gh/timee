import {combineReducers} from "redux";
import itemsReducer from "./itemsReducer";
import authReducer from "./authReducer";
import formReducer from './formReducer'



const reducers = combineReducers({
    items : itemsReducer,
    auth : authReducer,
    form : formReducer,
})

export default reducers;