import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


const NavigationLink = ({active, linkName, navPath}) => {
    return (
        <div className={`m-2  ${active? 'bg-black text-white': 'bg-white text-black'}`}>
           <NavLink to={navPath}>{linkName}</NavLink>
        </div>
    );
}
NavigationLink.propTypes = {
    active :  PropTypes.bool,
    linkName : PropTypes.string.isRequired,
    navPath : PropTypes.string,
};

NavigationLink.defaultProps = {
    active : false,
    navPath : '/'
}


export default NavigationLink;