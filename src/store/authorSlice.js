import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get Authors From API
export const getAuthors = createAsyncThunk('author/getAuthors', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch(`http://localhost:3001/authors`);
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Get Single Author By ID
export const getAuthor = createAsyncThunk('author/getAuthor', async(userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch(`http://localhost:3001/authors/${userId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Create Author when add post for first time
export const createAuthor = createAsyncThunk('author/createAuthor', async(authorData, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3001/authors', {
            method: 'POST',
            body: JSON.stringify(authorData),
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

// Update Auther post count
export const authorPostCount = createAsyncThunk('author/authorPostCount', async(author, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3001/authors/${author.id}`, {
            method: 'PATCH',
            body: JSON.stringify({"postCount": author.count}),
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

const authorSlice = createSlice({
    name: 'author',
    initialState: { authors: [], author: [], isLoading: false },
    extraReducers: {
        
        // Get Authors
		[getAuthors.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [getAuthors.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.authors = action.payload;
        },
        [getAuthors.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Get Single Authors
		[getAuthor.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [getAuthor.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.author = action.payload;
        },
        [getAuthor.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Create Author
        [createAuthor.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [createAuthor.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.authors.push(action.payload)
        },
        [createAuthor.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Update Single Authoe Post Count
		[authorPostCount.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [authorPostCount.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.author = action.payload;
            
        },
        [authorPostCount.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default authorSlice.reducer;