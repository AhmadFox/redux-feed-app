import React from 'react'
import { Link } from 'react-router-dom'

const PostBox = ( { post } ) => {

	return (
		<article className='bg-white px-4 py-6 rounded-lg shadow-lg'>
			<div className="flex justify-between items-center mb-4">
				<h2 className="font-bold uppercase text-lg xl:text-xl text-gray-800">{post.title}</h2>
				<span className={`px-4 py-2 rounded-full uppercase font-semibold text-xs text-white bg-${post.category.color}`}>{post.category.name}</span>
			</div>
			<div className="flex items-center gap-x-2 mb-3">
				<span className='text-gray-500 text-sm font-medium'>By: {post.user.name}</span>
				<span className='text-gray-500 text-sm font-medium'>|</span>
				<span className='text-gray-500 text-sm font-medium'>{post.date}</span>
			</div>
			<p className="text-sm text-gray-700 mb-4">{post.content}</p>
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
			<Link to={`/posts/${post.id}`} className='text-purple-600 text-sm uppercase font-semibold hover:text-purple-800 ease-in-out duration-300'>Open Post</Link>
		</article>
	)
}

export default PostBox
