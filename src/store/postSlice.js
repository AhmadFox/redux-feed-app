import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get Posts From API
export const getPosts = createAsyncThunk('post/getPosts', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch('http://localhost:3001/posts');
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Get Single Post By ID
export const getSinglePost = createAsyncThunk('post/getSinglePost', async(postId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch(`http://localhost:3001/posts/${postId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Create New Post
export const createPost = createAsyncThunk('post/createPost', async(postData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		// postData.userName = getState().auth.name;
        const res = await fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
		const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Update Existing Post
export const updatePost = createAsyncThunk('post/updatePost', async(postData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3001/posts/${postData.id}`, {
            method: 'PATCH',
            body: JSON.stringify(postData),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
		const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});


const postsSlice = createSlice({
	name: 'post',
	initialState: { posts: [], isLoading: false },
	extraReducers: {

		// Get Posts
		[getPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

		// Get Single Post
		[getSinglePost.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
        },
        [getSinglePost.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

		// Create Post
		[createPost.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [createPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts.push(action.payload);
        },
        [createPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Update Post
		[updatePost.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updatePost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
        },
        [updatePost.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
		
	}
})

export default postsSlice.reducer;