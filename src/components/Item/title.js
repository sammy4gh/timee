import React from 'react';
import PropTypes from 'prop-types';
const Title = ({title}) => {
    return (
        <div className={'text-xl m-2 font-semibold'}>
            {title}
        </div>
    );
}

Title.propTypes = {
    title : PropTypes.string.isRequired
};
export default Title;