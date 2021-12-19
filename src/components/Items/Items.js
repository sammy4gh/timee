import React, {useEffect, useRef} from 'react';
import Item from "../Item/item";
import {useDispatch, useSelector} from "react-redux";
import {getDocs, collection, query, onSnapshot}from 'firebase/firestore'
import {db} from "../../config/firebaseConfig";
import {bindActionCreators} from "redux";
import {formActions, itemsActions} from "../../state";


const Items = (props) => {
    const items = useSelector(state => state.items)
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
    const {GET_ITEMS} = bindActionCreators(itemsActions, dispatch)
    const {ADD_ITEM, UPDATE_ITEM} = bindActionCreators(formActions, dispatch)

    useEffect(()=>{
        GET_ITEMS()
    },[items.length, form ])

    return (
        <div className={'p-4 m-4 w-full md:w-2/3 lg:w-1/3 flex flex-col justify-center'}>
            {  (items.length < 1 || items === undefined ?
                <h3 className={'font-semibold text-center'}>There are no items</h3>  :
                items.map((item, i)=>{
                    return <Item key={item.id} item={item}/>
                }))
            }
        </div>

    );
}

export default Items;