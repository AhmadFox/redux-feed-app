import React from 'react'

import InputBox from './InputBox';
import Select from './Select';

const PostForm = () => {

	const categorys = [
		{
			label: 'Select Category',
			value: '0'
		},
		{
			label: 'Web Design',
			value: '1'
		},
		{
			label: 'Web API',
			value: '2'
		},
		{
			label: 'Web Security',
			value: '3'
		},
		{
			label: 'Web Deployment',
			value: '4'
		},
	]

	const submitHandler = (event) => {
		event.preventDefault();
	}

	return (
		<form onSubmit={submitHandler} action="" className='grid grid-cols-2 gap-4'>
			<InputBox addStyle={'border border-purple-300 focus:border-purple-600 ease-in-out duration-200 col-span-2 md:col-span-1 !rounded-full w-full'} holder={'Post Title'} />
			<Select addStyle='border border-purple-300 focus:border-purple-600 ease-in-out duration-200 col-span-2 md:col-span-1 w-full rounded-full py-2 px-4' options={categorys} action={ ()=> console.log('') } value='1' />
			<textarea className='border border-purple-300 focus:border-purple-600 ease-in-out duration-200 col-span-2 outline-none p-3 rounded-2xl' rows='4' placeholder="What's in your maind"></textarea>
			<div className="">
				<button className='px-8 py-2.5 text-sm rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold uppercase ease-in-out duration-300'>Post</button>
			</div>
		</form>
	)
}

export default PostForm
