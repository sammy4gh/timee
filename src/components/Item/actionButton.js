import React from 'react';
import PropTypes from 'prop-types';
import {PencilIcon} from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {itemsActions} from '../../state'

ActionButton.propTypes = {
    icon : PropTypes.any.isRequired,
    itemID : PropTypes.string
};



function ActionButton({icon, itemID}) {
    const dispatch = useDispatch()
    const {DELETE_ITEM, GET_ITEMS} = bindActionCreators(itemsActions, dispatch)

    const onCLick = (itemID)=>{
        DELETE_ITEM(itemID)
    }
    return (
        <button onClick={()=>onCLick(itemID)} className={'bg-gray-200 p-2 m-2 rounded-full'}>
            {icon}
        </button>
    );
}

export default ActionButton;