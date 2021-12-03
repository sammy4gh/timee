import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebaseConfig";


/*const  items = [
    {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    },
    {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    }, {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    },
    {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    }, {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    },

]*/

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log('',action.payload);
           /* state=[...state, action.payload]*/
        case 'GET_ITEMS':
           return state = action.payload
        default:
            return state;
    }
}

export default itemsReducer