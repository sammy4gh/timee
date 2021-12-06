import {addDoc, collection, getDocs, onSnapshot, query, serverTimestamp} from 'firebase/firestore'
import {db} from "../../config/firebaseConfig";

export const  ADD_ITEM = (payload) => {
    return  async (dispatch, getState) => {
        try {
            const docRef = await addDoc(collection(db, 'items'),{
                ...payload,
                createdAt : serverTimestamp()
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

export const GET_ITEMS =()=>{
    return async (dispatch, geState)=>{
        const dbItems = [];
        const q = query(collection(db,'items'))


        const unsubscribe = onSnapshot(q,  async (querySnapshot)=>{
            await   querySnapshot.forEach( (  doc)=>{
                dbItems.push(  doc.data())
            })
            await dispatch({
                type: 'GET_ITEMS',
                payload : dbItems
            })
        })


        console.log('action item',dbItems);

    }
}

