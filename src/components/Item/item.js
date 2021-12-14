import React from 'react';
import PropTypes from 'prop-types';
import Title from "./title";
import Details from "./details";
import {PencilIcon, TrashIcon} from "@heroicons/react/solid";
import ActionButton from "./actionButton";

const Item = ({title, details, dueAt, itemID}) => {
    return (
        <div className={'shadow-md px-6 py-4 m-2 flex rounded-lg flex flex-col justify-between'}>
            <Title title={title}/>
            <Details details={details}/>
            <div className={'flex justify-around '}>
                <ActionButton  icon={<PencilIcon className={'h-5 w-5 text-yellow-400'}/>}/>
                <ActionButton itemID={itemID} icon={<TrashIcon className={'h-5 w-5 text-red-400'}/>}/>
            </div>
        </div>
    );
};

Item.propTypes = {
    title : PropTypes.string.isRequired,
    details : PropTypes.string.isRequired,

};

export default Item;
