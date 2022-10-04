import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chatsReducer/chatsReducer";
import { countReducer } from "./countReduser/countReducer";
import { messagesReducer } from "./messagesReducer/messagesReducer";

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    count: countReducer,
});

export const store = createStore(reducer);