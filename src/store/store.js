import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './postSlice';
import categoryReducer from './categorySlice';
import usersReducer from './userSlice';
import authReducer from './authSlice';


export default configureStore({
  reducer: {
    posts: postsReducer,
    categorys: categoryReducer,
    users: usersReducer,
    auth: authReducer
  }
});