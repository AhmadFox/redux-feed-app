import React from 'react'

const AddPostBtn = ({openModal}) => {
	return (
		<button onClick={() => openModal(true)} aria-label="Write Post" className='fixed z-10 bottom-6 md:bottom-16 right-4 md:right-6 p-4 shadow-lg bg-purple-700 hover:bg-purple-800 ease-in-out duration-300 rounded-full'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
			</svg>
		</button>
	)
}

export default AddPostBtn
