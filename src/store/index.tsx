import { useReducers } from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

export const useStore = () => {
  // Reducers
  const reducers = useReducers();

  const initialState = {};

  // Persist config
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['onboarding', 'profile'],
  };

  const persistReduce = persistReducer(persistConfig, reducers);

  const createFlipperDebugger = require('redux-flipper').default;

  const reduxInmmutableStateInvariant =
    require('redux-immutable-state-invariant').default();

  // Configure store
  const store = configureStore({
    reducer: persistReduce,
    middleware: getDefaultMiddleware =>
      __DEV__
        ? [
            ...getDefaultMiddleware({ serializableCheck: false }),
            createFlipperDebugger(),
            reduxInmmutableStateInvariant,
          ]
        : getDefaultMiddleware({
            serializableCheck: false,
          }),
    preloadedState: initialState,
    devTools: __DEV__,
  });

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
