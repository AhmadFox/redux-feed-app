import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './postSlice';
import categoryReducer from './categorySlice';
import usersReducer from './userSlice';


export default configureStore({
  reducer: {
    posts: postsReducer,
    categorys: categoryReducer,
    users: usersReducer
  }
});