import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get categorys From API
export const getCategorys = createAsyncThunk('category/getCategorys', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch('http://localhost:3001/categorys');
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Get single category by ID
export const getSingleCategory = createAsyncThunk('category/getSingleCategory', async(categoryId, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
    try {
		const res = await fetch(`http://localhost:3001/categorys/${categoryId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Update Category post count
export const categoryPostCount = createAsyncThunk('category/categoryPostCount', async(category, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3001/categorys/${category.id}`, {
            method: 'PATCH',
            body: JSON.stringify({"postCount": category.count}),
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

const categorySlice = createSlice({
	name: 'category',
	initialState: { categorys: [], category: [], isLoading: false },
	extraReducers: {
		// Get Categorys
		[getCategorys.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [getCategorys.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categorys = action.payload;
        },
        [getCategorys.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

		// Get Single Category
		[getSingleCategory.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [getSingleCategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.category = action.payload;
        },
        [getSingleCategory.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Update Single Category Post Count
		[categoryPostCount.pending]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        [categoryPostCount.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categorys[action.payload.id].postCount = action.payload.postCount;
            
        },
        [categoryPostCount.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
	}
})

export default categorySlice.reducer;
