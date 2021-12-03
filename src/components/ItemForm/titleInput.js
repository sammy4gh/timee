import React from 'react';
import PropTypes from 'prop-types';

function TitleInput({register}) {
    return (
        <div className={'m-2 rounded-md'}>
            <input className={'w-full rounded-md'} type="text" {...()=>register}  />
        </div>
    );
}

TitleInput.propTypes = {
    register : PropTypes.any.isRequired,
};

export default TitleInput;