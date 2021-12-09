
import {addDoc, collection, getDocs, orderBy, limit, onSnapshot, query, serverTimestamp} from 'firebase/firestore'
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
    return async (dispatch, getState)=>{
        const dbItems = [];
        const itemsRef = collection(db,'items')
        const q = query(itemsRef, orderBy('createdAt', 'desc'))

        try {
            const unsubscribe = onSnapshot(q,  async (querySnapshot)=>{
                await console.log('snapshot', querySnapshot.docs.length)
                await   querySnapshot.forEach( (  doc)=>{
                    if ( querySnapshot.docs.length !== dbItems.length){
                        if (!dbItems.includes(doc.data().createdAt)){
                            dbItems.push(  doc.data())
                        }else (
                            console.log('item include',doc.data())
                        )
                    }

                })


                if ( await querySnapshot.docs.length === dbItems.length ){
                    await dispatch({
                        type: 'GET_ITEMS',
                        payload : dbItems
                    })
                }
                await console.log('dbItems', dbItems)
                await  console.log('getState', getState())
            })

        }catch (e) {
            console.log('There is an error reading data', e)
        }




    }
}

