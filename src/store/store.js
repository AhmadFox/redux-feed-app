import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import postsReducer from './postSlice';
import categoryReducer from './categorySlice';
import authorReducer from './authorSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    categorys: categoryReducer,
    authors: authorReducer
  }
});