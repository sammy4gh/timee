import React from 'react';
import PropTypes from 'prop-types';
import {PencilIcon} from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {itemsActions, formActions} from '../../state'

ActionButton.propTypes = {
    icon : PropTypes.any.isRequired,
    itemID : PropTypes.string,
    onCLick : PropTypes.func
};



function ActionButton({icon, itemID, item, onCLick}) {
    const dispatch = useDispatch()
    const {DELETE_ITEM, GET_ITEMS} = bindActionCreators(itemsActions, dispatch)
    const {INPUTS} = bindActionCreators(formActions, dispatch)

    const onDelete = (itemID)=>{
        DELETE_ITEM(itemID)
    }

    const onEdit = (item)=>{
        console.log('onEdit',item)
        INPUTS(item)
    }
    return (
        <button onClick={()=> {
            return onCLick()
        } } className={'bg-gray-200 p-2 m-2 rounded-full'}>
            {icon}
        </button>
    );
}

export default ActionButton;