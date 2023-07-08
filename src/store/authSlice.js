import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Post New User Account On Data Base
export const createUser = createAsyncThunk('user/createUser', async(userkData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3001/users/register', {
            method: 'POST',
            body: JSON.stringify(userkData),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
        const data = await res.json();
        data.accessToken && sessionStorage.setItem("access_token", data.accessToken);
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Post New User Account On Data Base
export const loginUser = createAsyncThunk('user/loginUser', async(userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3001/login`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
        const data = await res.json();
        data.accessToken && sessionStorage.setItem("access_token", data.accessToken);
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Get Selected User By Session Id
export const getUser = createAsyncThunk('user/getUser', async(user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'GET',
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

export const logout = createAsyncThunk('user/logOut', async(userLogState, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return userLogState;
    } catch (error) {
       return rejectWithValue(error.message); 
    }
});

const authSlice = createSlice({
	name: 'auth',
	initialState: { user: [], isLoading: false, isLogIn: '' },
	extraReducers: {
		// Create New User Account
		[createUser.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [createUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        [createUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

		// Get User Account
		[getUser.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Login User Account
		[loginUser.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Login User Account
		[logout.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        [logout.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
	}
});

export default authSlice.reducer;