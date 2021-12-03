import React from 'react';
import PropTypes from 'prop-types';
import Title from "./title";
import Details from "./details";

const Item = ({title, details}) => {
    return (
        <div className={'shadow p-2 m-2 flex  flex-col justify-between'}>
            <Title title={title}/>
            <Details details={details}/>
        </div>
    );
};

Item.propTypes = {
    title : PropTypes.string.isRequired,
    details : PropTypes.string.isRequired,

};

export default Item;
