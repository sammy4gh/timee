let items = [
    {
        id : '1' ,
        title : 'Samsung edge pane',
        details : 'Check to see if Mom has a featureon her phone called edge pane '
    },
]

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            console.log('reducer payload',action.payload)
            return action.payload
        case 'DELETE_ITEM':
            console.log('item deleted ==> ', action.payload)
            const deleteItem = (item)=>{
                return item.id !== action.payload
            }
            return state.filter(deleteItem)
        default:
            return state;
    }
}

export default itemsReducer