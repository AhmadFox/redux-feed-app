import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get Authors From API
export const getAuthors = createAsyncThunk('author/getAuthors', async(authorId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch(`http://localhost:3001/authors/${authorId}`);
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

const authorSlice = createSlice({
    name: 'author',
    initialState: { authors: [], isLoading: false },
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
        [createAuthor.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [createAuthor.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.authors.pus(action.payload)
        },
        [createAuthor.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default authorSlice.reducer;