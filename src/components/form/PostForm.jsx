import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { createPost, updatePost } from '../../store/postSlice';
import { getCategorys, categoryPostCount } from '../../store/categorySlice';
import { getAuthor, createAuthor, authorPostCount } from '../../store/authorSlice';

const PostForm = ({btnCaption, setSave, isModal, post}) => {

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth.user );
	const { categorys } = useSelector((state) => state.categorys);
	const { author, isLoading } = useSelector( (state) => state.authors);

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

	const submitHandler = (event) => {

		event.preventDefault();

		// Format Date
		const date = new Date();
		const dateFormat = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

		// Update Category
		const categoryItem = categorys.find((item) => item.value == category );

		// Decleration Post Obj
		const insertDtate = createPost({
			id: nanoid(),
			title,
			content,
			category: {
				id: categoryItem.id,
				name: categoryItem.name,
				value: categoryItem.value,
				color: categoryItem.color,
				postCount: categoryItem.postCount + 1
			},
			date: dateFormat,
			author: {
				name: `${user.firstName} ${user.lastName}`, id: user.id
			}
		});

		// Clear Form Fields
		setTitle('')
		setContent('')
		setCategory('')
		setValidForm(false)

		// Post Form
		if ( validForm ) { // Check if form fields not empty
			if ( post ) { // check if it's edite mode

				setSave(false); // make save button enabled
				dispatch(updatePost({ id: post.id, title, content, category: categorys.find((item) => item.value == category ) })); // Update current post

			} else { // if it's NOT edit mode

				dispatch(insertDtate); // create new post
				dispatch(categoryPostCount({ id: category, count: categoryItem.postCount + 1 }));

				author ? 
				// Uodate Author Post Count
				dispatch(authorPostCount({
					id: user.id,
					count:  author.postCount + 1
				}))
				:
				// Create New Author if author not exiest or it's first time to Post
				dispatch(createAuthor({
					"name": `${user.firstName} ${user.lastName}`,
					"email": user.email,
					"userType": "author",
					"bio": "This where can auther at next task can add his Bio data",
					"id": user.id,
					"postCount": 1
				}))
				console.log('isAuthor: ', author);
			}
		}

		// Close/Open Post Modal If It's Modal Post
		isModal && isModal(false);
	}
	
	// Set Valedation Form
	useEffect(() => {

		const formFields = document.querySelectorAll('[required]')
		formFields.forEach(el => {
			title === '' || content === '' || category === '' ? setValidForm(false) : setValidForm(true)
		});

	}, [title, content]);


	// Get Category List & Authers List
	useEffect(() => {

		dispatch(getAuthor(user.id));
		dispatch(getCategorys());
		
	}, [dispatch]);



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
					post && <button onClick={() => setSave(false)} className='px-6 py-2.5 text-sm rounded-full text-gray-700 hover:text-white border border-gray-700 hover:gray-purple-800 hover:bg-gray-800 font-semibold uppercase ease-in-out duration-300'>Cancle</button>
				}
			</div>

		</form>
	)
}

export default PostForm;