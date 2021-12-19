import React from 'react';
import PropTypes from 'prop-types';

const Details = ({details}) => {

    return (
        <div className={'m-2 whitespace-pre-line'}>

            {details}
        </div>
    );
}
Details.propTypes = {
    details : PropTypes.string
};

export default Details;