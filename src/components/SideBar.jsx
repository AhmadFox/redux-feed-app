import React from 'react'
import { Link } from 'react-router-dom'

import InputBox from './form/InputBox';
import AutherBox from './auther/AutherBox';

const SideBar = () => {

	return (
		<aside className='xl:bg-white xl:shadow-lg xl:px-4 xl:py-6 rounded-lg mb-9 xl:mb-0'>
			<div className="relative">
				<InputBox addStyle={'border lg:border-0 border-purple-200 bg-white xl:bg-zinc-100 !rounded-full w-full rounded-full text-sm py-3 pl-5 pr-12 xl:mb-6'} holder={'Search By Post Title'}/>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-500 absolute top-0 translate-y-1/2 right-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</div>
			<div className="overflow-hidden h-0 xl:h-auto">
				<p className="text-gray-500 font-bold text-lg uppercase">Categorys</p>
				<hr className='my-3' />
				<ul className="grid gap-y-3 mb-9">
					<li className='flex justify-between items-center'>
						<Link to='' className='font-medium text-gray-600 hover:text-gray-800 ease-in-out duration-300'>Category one</Link>
						<span className="text-sm uppercase text-gray-500 font-medium">(12)</span>
					</li>
					<li className='flex justify-between items-center'>
						<Link to='' className='font-medium text-gray-600 hover:text-gray-800 ease-in-out duration-300'>Category Two</Link>
						<span className="text-sm uppercase text-gray-500 font-medium">(10)</span>
					</li>
					<li className='flex justify-between items-center'>
						<Link to='' className='font-medium text-gray-600 hover:text-gray-800 ease-in-out duration-300'>Category Three</Link>
						<span className="text-sm uppercase text-gray-500 font-medium">(9)</span>
					</li>
					<li className='flex justify-between items-center'>
						<Link to='' className='font-medium text-gray-600 hover:text-gray-800 ease-in-out duration-300'>Category Four</Link>
						<span className="text-sm uppercase text-gray-500 font-medium">(4)</span>
					</li>
				</ul>
				<p className="text-gray-500 font-bold text-lg uppercase">Authers</p>
				<hr className='mt-3 mb-5' />
				<div className="grid gap-y-6">
					<AutherBox />
					<AutherBox />
					<AutherBox />
					<Link to='authers' className='text-center text-purple-600 hover:text-purple-800 capitalize ease-in-out duration-300'>View All Authers</Link>
				</div>
			</div>
		</aside>
	)
}

export default SideBar
