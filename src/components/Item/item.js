import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Title from "./title";
import Details from "./details";
import {PencilIcon, TrashIcon} from "@heroicons/react/solid";
import ActionButton from "./actionButton";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {formActions, itemsActions} from '../../state'

const Item = ({item}) => {
    const [toggleDetails, setToggleDetails] = useState(false);
    const dispatch = useDispatch()
    const {DELETE_ITEM, GET_ITEMS} = bindActionCreators(itemsActions, dispatch)
    const {INPUTS} = bindActionCreators(formActions, dispatch)

    const onDelete =(itemID)=>{
        DELETE_ITEM(itemID)
    }

    const onClick = () => {
      setToggleDetails(!toggleDetails)
    }

    return (
        <div onClick={onClick} className={' whitespace-pre-line break-word shadow-md px-6 py-4 m-2  flex rounded-lg flex flex-col justify-between cursor-pointer'}>
           <div>
               <Title title={item.title}/>
{/*
               <div className={'pl-2 text-gray-500'}>Due:  <span>{'Tomorrow'}</span></div>
*/}
           </div>

            { toggleDetails && <div>
                <Details details={item.details}/>
                <div className={'flex justify-around '}>
                    <ActionButton onCLick={() => INPUTS(item)}
                                  icon={<PencilIcon className={'h-5 w-5 text-yellow-500'}/>}/>
                    <ActionButton onCLick={() => DELETE_ITEM(item.id)}
                                  icon={<TrashIcon className={'h-5 w-5 text-red-400'}/>}/>
                </div>
            </div>
            }
        </div>
    );
};

Item.propTypes = {
    item : PropTypes.any.isRequired

};

export default Item;
