import thunk from "redux-thunk"
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux-store/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const  store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store);

export {
  store,
  persistor
}
