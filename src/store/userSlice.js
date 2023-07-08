import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        firstName: 'Ahmad',
        lastName: 'Gharaibeh',
        postCount: '2',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid, veritatis et eius, eaque accusantium fuga praesentium neque ducimus distinctio minima nostrum nobis velit officia. Obcaecati nihil excepturi alias porro.'
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        postCount: '1',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid, veritatis et eius, eaque accusantium fuga praesentium neque ducimus distinctio minima nostrum nobis velit officia. Obcaecati nihil excepturi alias porro.'
    },
    {
        id: 3,
        firstName: 'Semantha',
        lastName: 'Lowe',
        postCount: '1',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid, veritatis et eius, eaque accusantium fuga praesentium neque ducimus distinctio minima nostrum nobis velit officia. Obcaecati nihil excepturi alias porro.'
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const {getUser} = usersSlice.actions;

export default usersSlice.reducer;