import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create New User Account On Data Base
export const createUser = createAsyncThunk('user/createUser', async(userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const resAuth = await fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
        const resUser = await fetch('http://localhost:3001/authors', {
            method: 'POST',
            body: JSON.stringify({
                "id": userData.id,
                "name": `${userData.firstName} ${userData.lastName}`,
                "email": userData.email,
                "userType": "author",
                "bio": 'Bio data'
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        });
        const data = await resAuth.json();
        data.accessToken && sessionStorage.setItem("access_token", data.accessToken);
        return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

// Login User Account On Data Base
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

// Logout user from redux
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