import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded, postUpdate } from '../../store/postSlice';

const PostForm = ({btnCaption, setSave, isModal, post}) => {

	const categorys = useSelector(state => state.categorys );

	const [ title, setTitle ] = useState( post ? post.title : '' );
	const [ content, setContent ] = useState( post ? post.content : '' );
	const [ category, setCategory ] = useState(  post ? post.category.value : '' );
	const [ validForm, setValidForm ] = useState(false);

	// Form Valedation And Set Field Value
	const onChangeHandler = (e) => {
		
		e.target.name === 'title' && setTitle(e.target.value)
		e.target.name === 'content' && setContent(e.target.value)
		e.target.name === 'category' && setCategory(e.target.value)

		e.target.value === '' ? e.target.classList.add('invalid') : e.target.classList.remove('invalid')

	}

	useEffect(() => {

		const formFields = document.querySelectorAll('[required]')
		formFields.forEach(el => {
			title === '' || content === '' || category === '' ? setValidForm(false) : setValidForm(true)
		});

	}, [title, content, category])


	// Dispatch data to reducer
	const dispatch = useDispatch();

	const submitHandler = (event) => {
		event.preventDefault();

		// Format Date
		const date = new Date();
		const dateFormat = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

		const insertDtate = postAdded({
			id: nanoid(),
			title,
			content,
			category: categorys.find((item) => item.value == category ),
			date: dateFormat,
			user: [
				{
					name: 'Hani Salam', id: 5, account: 'auther'
				}
			]
		});

		setTitle('')
		setContent('')
		setCategory('')
		setValidForm(false)

		validForm &&
			post ?
				dispatch(postUpdate({ id: post.id, title, content, category: categorys.find((item) => item.value == category ) })) :
				dispatch(insertDtate) 
		
		post && setSave(false)

		isModal && isModal(false)
	}



	return (
		<form onSubmit={submitHandler} action="" className='grid grid-cols-2 gap-4'>

			<input type="text" value={title} name='title' onChange={onChangeHandler} placeholder='Post Title' required className='border border-purple-300 focus:border-purple-600 ease-in-out duration-200 col-span-2 md:col-span-1 !rounded-full w-full outline-none px-3 py-2' />

			<div className='relative col-span-2 md:col-span-1'>
				<select name='category' value={category} onChange={onChangeHandler} required className='outline-none appearance-none w-full invalid:text-gray-400 bg-white border border-purple-300 focus:border-purple-600 ease-in-out duration-200 rounded-full py-2 px-4'>
					{categorys.map((option, idx) => (
						<option key={idx} value={option.value} disabled={option.disabled}>{option.name}</option>
					))}
				</select>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</div>

			<textarea name='content' value={content} onChange={onChangeHandler} rows='4' placeholder="What's in your maind" required className='border border-purple-300 focus:border-purple-600 ease-in-out duration-200 col-span-2 outline-none p-3 rounded-2xl'></textarea>

			<div className="flex gap-x-3">
				<button disabled={!validForm} className='px-8 py-2.5 text-sm rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold uppercase ease-in-out duration-300'>{btnCaption ? btnCaption : 'Post'}</button>
				{
					post && <button onClick={() => setSave(false)} className='px-6 py-2.5 text-sm rounded-full text-purple-700 hover:text-white border border-purple-700 hover:border-purple-800 hover:bg-purple-800 font-semibold uppercase ease-in-out duration-300'>Cancle</button>
				}
			</div>

		</form>
	)
}

export default PostForm
