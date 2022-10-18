import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatsReducer } from "./chatsReducer/chatsReducer";
import { postsReducer } from "./postsReducer/postsReducer";
import { countReducer } from "./countReduser/countReducer";
import { messagesReducer } from "./messagesReducer/messagesReducer";
import { usersReducer } from "./usersReducer/usersReducer";
import { userReducer } from "./userReducer/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     console.log('before', store.getState());

//     let result = next(action);

//     console.log('after', store.getState());

//     return result;
// };

const timeout = store => next => action => {
    const delayMs = action?.meta?.delayMs;

    if(!delayMs) {
        return next(action);
    }

    const timeoutId = setTimeout(() => next(action), delayMs);

    return () => {
        clearTimeout(timeoutId);
    };
};

const config = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    chats: chatsReducer,
    posts: postsReducer,
    messages: messagesReducer,
    count: countReducer,
    users: usersReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(config, reducer);

// export const store = createStore(reducer, applyMiddleware(timeout, logger));
export const store = createStore(persistedReducer, applyMiddleware(timeout, thunk));
export const persistor = persistStore(store);