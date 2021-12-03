import {addDoc, collection, getDocs, serverTimestamp} from 'firebase/firestore'
import {db} from "../../config/firebaseConfig";
import firebase from "firebase/compat";

export const  ADD_ITEM = (payload) => {
    return  async (dispatch, getState) => {
        try {
            const docRef = await addDoc(collection(db, 'items'),{
                ...payload,
                createdAt : serverTimestamp()
            }).then(
                dispatch({
                    type: 'ADD_ITEM',
                    payload
                })
            )
        }catch (e) {
            console.error("Error adding document: ", e);
        }

    }
}

export const GET_ITEMS =(payload)=>{
    return async (dispatch, geState)=>{
        try {
            console.log('action is running')
            const items = await getDocs(collection(db, 'items'));
                dispatch({
                    type : 'GET_ITEMS',
                    payload : items
                })

        }catch (e){
            console.log('There is erro reading dara', e)
        }

    }
}

