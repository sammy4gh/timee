import React, {useEffect} from 'react';
import {auth, firebaseConfig} from "../../config/firebaseConfig";
import {app}  from "../../config/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import firebase from "firebase/compat";
import AuthProviderButton from "./authProviderButton";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {authActions} from "../../state";
import {useLocation, useNavigate} from "react-router-dom";



const Auth = (props) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {AUTH_WITH_PROVIDER} = bindActionCreators(authActions, dispatch)
    const provider = {
        google :  new GoogleAuthProvider(),
    }

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        return () => {
            if (auth){
                navigate(from, {replace: true})
            }
        };
    }, []);




    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center justi">
                <label className="font-light text-4xl mb-4">rai<span className="font-bold">raksa</span></label>
                <input type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                       placeholder="Email"/>
                <input type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                       placeholder="Password"/>
                <button
                    className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Login
                </button>
                <p className="text-right mb-4">Forgot password</p>
                <label className="text-gray-800 mb-4">or</label>
                <AuthProviderButton providerName={'GOOGLE'} provider={()=>{AUTH_WITH_PROVIDER(provider.google)}} bgColor={'bg-red'}/>
                <AuthProviderButton providerName={'FACEBOOK'} bgColor={'bg-blue'} />
                <AuthProviderButton providerName={'GITHUB'} bgColor={'bg-gray-800  '}/>
            </div>
        </div>
    );
}

export default Auth;