import {signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {auth} from "../../config/firebaseConfig";
import {error} from "autoprefixer/lib/utils";


export const  AUTH_WITH_PROVIDER = (provider) => {
    return  async (dispatch, getState) => {

        const authProvider = async (auth, provider)=>{
            signInWithPopup(auth, provider).then((result)=>{
                const user = result.user
                dispatch({
                    type : 'AUTH_WITH_PROVIDER',
                    payload : user
                })
            }).catch((e)=>{
                console.log('There is error', e)
            })
        }

        authProvider(auth, provider).then((user)=>{
             console.log('Action dispatched')
        }, error=>{
            console.log('Error dispatching action')
        })

        }

}
export const ON_AUTH_STATE_CHANGE = ()=>{
    return async (dispatch, getState)=>{
            onAuthStateChanged(auth, (user)=>{
                user = auth.currentUser
                dispatch({
                    type : 'ON_AUTH_STATE_CHANGE',
                    payload : user
                })
            })
    }
}