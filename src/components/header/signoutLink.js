import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {authActions} from "../../state";



const SignoutLink = ({active, linkName, navPath, }) => {
    const dispatch = useDispatch()
    const {SING_OUT} = bindActionCreators(authActions, dispatch)

    const onClick = () => {
      SING_OUT()
    }

    return (
        <div onClick={onClick} className={`cursor-pointer m-2 p-2 ${active? 'bg-black text-white': 'bg-white lg:bg-black text-black lg:text-white'} rounded-full`}>
           <div  >{linkName}</div>
        </div>
    );
}
SignoutLink.propTypes = {
    active :  PropTypes.bool,
    linkName : PropTypes.string.isRequired,
    navPath : PropTypes.string,
    onClick : PropTypes.func
};

SignoutLink.defaultProps = {
    active : false,
    navPath : '/'
}


export default SignoutLink;