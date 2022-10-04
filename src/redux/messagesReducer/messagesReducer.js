const initialState = {
    messages: [
        {
            id: 1,
            text: 'Привет, Дима', 
            author: 'Папа',
            chatId: 1,
        },
        {
            id: 2,
            text: 'Совещание в 11:00', 
            author: 'Boss',
            chatId: 2,
        },
        {
            id: 3,
            text: 'Привет, папа', 
            author: 'Дима',
            chatId: 1,
        },
        {
            id: 4,
            text: 'Жду всех сегодня в гости', 
            author: 'Алиса',
            chatId: 3,
        },
        {
            id: 5,
            text: 'Окей, босс', 
            author: 'Николай',
            chatId: 2,
        },
        {
            id: 6,
            text: 'Отлично! Я буду к 19:00', 
            author: 'Максим',
            chatId: 3,
        },
        {
            id: 7,
            text: 'А я немного опоздаю', 
            author: 'Аня',
            chatId: 3,
        },
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'addMessage':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'deleteMessage':
            return {
                ...state,
                messages: state.messages.filter((message) => message.id !== action.payload)
            }
        default: 
            return state
    }
}