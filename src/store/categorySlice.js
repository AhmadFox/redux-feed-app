import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		name: 'Select Category',
		value: '',
		color: '',
		disabled: true
	},
	{
		name: 'Technology',
		value: 1,
		color: 'blue',
	},
	{
		name: 'Sport',
		value: 2,
		color: 'rose',
	},
	{
		name: 'Economy',
		value: 3,
		color: 'amber',
	},
	{
		name: 'Travel',
		value: 4,
		color: 'cyan',
	},
	{
		name: 'Health',
		value: 5,
		color: 'lime',
	},
	{
		name: 'Life Style',
		value: 6,
		color: 'pink',
	},
];

const categorySlice = createSlice({
	name: 'categorys',
	initialState,
	reducers: {
		
	}
})

export default categorySlice.reducer