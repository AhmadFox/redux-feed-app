import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'First Post!', category: { name: 'Deploiment', value: 4, color: 'cyan', }, content: 'Hello', date: 'Jun 12, 2023', user: {name: 'Ahmad Gharaibeh', id: 1, account: 'admin'}},
    {id: 2, title: 'Secound Post!',  category: { name: 'Security', value: 3, color: 'amber', }, content: 'More Next', date: 'Jun 7, 2023', user: {name: 'John Doe', id: 2, account: 'auther'}},
    {id: 3, title: 'Therd Post!', category: { name: 'REST API', value: 2, color: 'rose', }, content: 'Lorm Ipsom', date: 'May, 22 2023', user: {name: 'Semantha Lowe', id: 3, account: 'auther'}},
    {id: 4, title: 'Fourth Post!', category: { name: 'Web 3.0', value: 6, color: 'blue', }, content: 'Lorm Ipsom', date: 'May, 20 2023', user: {name: 'Ahmad Gharaibeh', id: 1, account: 'admin'}},
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdate(state, action) {
      const { id, title, category, content, date } = action.payload;
      const existingPost = state.find( post => post.id === id);
      if ( existingPost ) {
        existingPost.title = title;
        existingPost.category = category;
        existingPost.content = content;
        existingPost.date = date;
      }
    }
  }
})

export const { postAdded, postUpdate } = postsSlice.actions;

export default postsSlice.reducer;