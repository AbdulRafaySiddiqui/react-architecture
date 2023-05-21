import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import weatherReducer from "./weather";
import userReducer, { userSlice } from "./user";

const reducers = combineReducers({
  weather: weatherReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 2,
  whitelist: [userSlice.name],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
