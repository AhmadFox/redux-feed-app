import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		name: 'Select Category',
		value: '',
		color: '',
		disabled: true
	},
	{
		name: 'Web Design',
		value: 1,
		color: 'blue',
	},
	{
		name: 'REST API',
		value: 2,
		color: 'rose',
	},
	{
		name: 'Security',
		value: 3,
		color: 'amber',
	},
	{
		name: 'Deploiment',
		value: 4,
		color: 'cyan',
	},
	{
		name: 'Web 3.0',
		value: 5,
		color: 'lime',
	},
	{
		name: 'Software Architect',
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