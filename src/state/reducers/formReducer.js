const formReducer = (state = null,action )=>{
    switch(action.type){
        case 'ADD_ITEM':
            console.log(action.payload)
            return state
        case 'UPDATE_ITEM':
            console.log('Updated')
            return state = null
        case 'INPUTS':
            return action.payload
        default:
            return state
    }
}

export default formReducer