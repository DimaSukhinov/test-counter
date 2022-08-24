import {combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
  counters: counterReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;