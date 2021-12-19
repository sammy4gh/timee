import {addDoc, collection, doc, serverTimestamp, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebaseConfig";


export const INPUTS = (payload)=>{
    return async (dispatch, getState)=>{
    console.log('INPUT payload', payload)
    dispatch({
        type : 'INPUTS',
        payload
    })

    }
}
export const  ADD_ITEM = (payload) => {
    return  async (dispatch, getState) => {
        try {
            const docRef = await addDoc(collection(db, 'items'),{
                ...payload,
                createdAt : await serverTimestamp()
            }).then(
                dispatch({
                    type: 'ADD_ITEM',
                    payload : 'Item added succesfully'
                })
            )
        }catch (e) {
            console.error("Error adding document: ", e);
        }

    }
}

export const UPDATE_ITEM = (item)=>{
    return async (dispatch, getState)=>{
        console.log(item)
        try {
            const itemRef = await doc(db, 'items', item.id )

            await updateDoc(itemRef, {
               title : item.title,
               details : item.details
            }).then(
                dispatch({
                    type : 'UPDATE_ITEM',
                })
            )
        }catch (e) {
            console.trace('Error updating item => ', e)
        }
    }
}