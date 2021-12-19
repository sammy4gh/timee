const authReducer = (state=null, action)=>{
    switch (action.type) {
        case 'AUTH_WITH_PROVIDER':
            console.log('authreducer', action.payload)
            return state
        case 'ON_AUTH_STATE_CHANGE':
            console.log('auth state', action.payload)
            return action.payload
        case 'SIGN_OUT':
            console.log(action.payload);
            return state
        default:
            return state
    }
}

export default authReducer;