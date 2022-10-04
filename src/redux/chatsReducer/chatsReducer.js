import { Business, Diversity1, Diversity3 } from '@mui/icons-material';

const initialState = {
    chats: [
        {
            id: 1,
            title: 'Семья',
            icon: <Diversity1 />,
        },
        {
            id: 2,
            title: 'Работа',
            icon: <Business />,
        },
        {
            id: 3,
            title: 'Друзья',
            icon: <Diversity3 />,
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        default: 
            return state
    }
}