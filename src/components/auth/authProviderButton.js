import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {authActions} from "../../state";


const AuthProviderButton = ({providerName, provider, bgColor})=> {
    const dispatch = useDispatch()
    const {AUTH_WITH_PROVIDER} = bindActionCreators(authActions, dispatch)



    return (

            <button
                onClick={provider}
                className={`w-full h-12 rounded-lg ${bgColor}-600 text-gray-200 uppercase font-semibold hover:${bgColor}-700 text-gray-100 transition mb-4 px-0`}>Sign
                with {providerName}
            </button>
    );
}

AuthProviderButton.propTypes = {
    providerName : PropTypes.string.isRequired,
    provider : PropTypes.func,
    bgColor : PropTypes.string.isRequired
};

AuthProviderButton.defaultProps={
    provider : ()=>{}
}


export default AuthProviderButton;