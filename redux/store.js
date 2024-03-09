import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import counterReducer from './slices/counterSlice';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


const rootReducer = combineReducers({
   counter: counterReducer,
});

const persistConfig = {
   key: 'root',
   version: 1,
   storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 2023-10-11 - Elimine la constante PURGE de la lista de ignored actions
//              para que se pueda comenzar en blanco el app.


const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
   }),
});

export const persistor = persistStore(store);
export default store;
