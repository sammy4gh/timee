import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebaseConfig";

let items = [
    {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    },
]

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
           console.log(action.payload)
            return state
        case 'GET_ITEMS':
            console.log('reducer payload',action.payload)
            return action.payload
        default:
            return state;
    }
}

export default itemsReducer