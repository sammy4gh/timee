import React, {useEffect} from 'react';
import Item from "../Item/item";
import {useDispatch, useSelector} from "react-redux";
import {getDocs, collection}from 'firebase/firestore'
import {db} from "../../config/firebaseConfig";
import {bindActionCreators} from "redux";
import {itemActions} from "../../state";

const Items = (props) => {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()
    const {GET_ITEMS} = bindActionCreators(itemActions, dispatch)

    useEffect(()=>{
    })

    items.forEach(async (doc)=>{
        console.log( await doc.data())
    })

    return (
        <div className={' '}>
            {
                GET_ITEMS(),
                items.forEach(async(item, i) => {
                   return <Item key={i} details={item.details} title={item.title}/>
            })
            }
        </div>

    );
}

export default Items;