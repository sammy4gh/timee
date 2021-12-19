import {onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import {auth} from "../../config/firebaseConfig";


export const  AUTH_WITH_PROVIDER = (provider) => {
    return  async (dispatch, getState) => {

        const authProvider = async (auth, provider)=>{
           await signInWithPopup(auth, provider).then((result)=>{
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
          await  onAuthStateChanged(auth, (user)=>{
                user = auth.currentUser
                dispatch({
                    type : 'ON_AUTH_STATE_CHANGE',
                    payload : user
                })
            })
    }
}

export const SING_OUT = ()=>{
    return async (dispatch, getState)=>{
        await signOut(auth).then(()=>{
           dispatch({
               type : 'SIGN_OUT',
               payload : 'User sign out'
           })
        },error=>{
            console.log('there is error', error)
        })
    }
}