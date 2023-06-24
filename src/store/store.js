import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './postSlice';
import categoryReducer from './categorySlice';


export default configureStore({
  reducer: {
    posts: postsReducer,
    categorys: categoryReducer,
  }
});