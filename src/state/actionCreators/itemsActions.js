
import {addDoc, collection, getDocs, orderBy, limit, onSnapshot, query, serverTimestamp, doc, deleteDoc} from 'firebase/firestore'
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
        let dbItems = [];
        const itemsRef = collection(db,'items')
        const q = query(itemsRef, orderBy('createdAt', 'desc'))

        try {
            const unsubscribe = onSnapshot(q,  async (querySnapshot)=>{
                await   querySnapshot.forEach( (  doc, i)=>{
                    if ( querySnapshot.docs.length !== dbItems.length){
                        if (!dbItems.includes(doc.data().createdAt)){
                            /*dbItems.push(  doc.data())*/
                            dbItems = [...dbItems , {...doc.data(), id : doc.id}]
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
            })

        }catch (e) {
            console.log('There is an error reading data', e)
        }




    }
}

export const DELETE_ITEM = (itemID) => {
  return async (dispatch, getState)=>{

      console.log('delete id para : ',itemID);



      const itemRef =  await doc(db, 'items', itemID)
        console.log('itemRef : ', itemRef)
      await deleteDoc(itemRef).then((result)=>{
          dispatch({
              type : 'DELETE_ITEM',
              payload : itemID
          })

          console.log('getState', getState().items[0].id)



      })
  }
}

