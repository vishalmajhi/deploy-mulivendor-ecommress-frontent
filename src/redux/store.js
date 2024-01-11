// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer/user';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers if needed
  },
});

export default store;
