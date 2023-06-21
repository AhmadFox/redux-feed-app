import React from 'react'
import { Link } from 'react-router-dom'

const PostBox = ({title, content, date, user}) => {

	return (
		<article className='bg-white px-4 py-6 rounded-lg shadow-lg'>
			<h2 className="font-bold uppercase text-lg xl:text-xl text-gray-800 mb-4">{title}</h2>
			<div className="flex items-center gap-x-2 mb-3">
				<span className='text-gray-500 text-sm font-medium'>By: {user[0].name}</span>
				<span className='text-gray-500 text-sm font-medium'>|</span>
				<span className='text-gray-500 text-sm font-medium'>{date}</span>
			</div>
			<p className="text-sm text-gray-700 mb-4">{content}</p>
			<ul className="flex items-center gap-x-5 mb-4">
				<li>
					<button className='flex items-center text-gray-600'>👍 <span className='ml-2'>0</span></button>
				</li>
				<li>
					<button className='flex items-center text-gray-600'>❤️ <span className='ml-2'>0</span></button>
				</li>
				<li>
					<button className='flex items-center text-gray-600'>🎉 <span className='ml-2'>0</span></button>
				</li>
				<li>
					<button className='flex items-center text-gray-600'>👀 <span className='ml-2'>0</span></button>
				</li>
			</ul>
			<Link to='/posts/11' className='text-purple-600 text-sm uppercase font-semibold hover:text-purple-800 ease-in-out duration-300'>Open Post</Link>
		</article>
	)
}

export default PostBox