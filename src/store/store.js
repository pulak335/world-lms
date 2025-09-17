import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

// Import your reducers here
import authReducer from './slices/auth-slice'
import coursesReducer from './slices/courses-slice'
import cartReducer from './slices/cart-slice'
import uiReducer from './slices/ui-slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'], // Persist auth and cart state
}

const rootReducer = combineReducers({
  auth: authReducer,
  courses: coursesReducer,
  cart: cartReducer,
  ui: uiReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store)
