const initialState = {
    count: 0
}

export const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }
        case 'reset':
            return {
                ...state,
                count: state.count = 0
            }    
        default: 
            return state
    }
}