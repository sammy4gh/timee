import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({register} )=> {
    return (
        <div className={'m-2 '}>
            <textarea  className={'w-full rounded-md '} name="" id=""  {...()=>register}/>
        </div>
    );
};

ItemDetails.propTypes = {
    register : PropTypes.any.isRequired
};

export default ItemDetails;
