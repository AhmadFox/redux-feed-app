import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

import Logo from '../assets/images/logo.svg';
import Avatar from '../assets/images/logo-mono.png'
import Container from './ui/Container';
import Dropdown from './ui/Dropdown';

const  Navbar = ({ userInfo, logInState }) => {

	const [ menu, setMenu ] = useState(false);

	const openMenu = () => {
		
		setMenu(!menu);

	}

	const logout = () => {
		sessionStorage.removeItem('access_token');
		logInState(false);
	}


	return (
		<nav className='bg-zinc-900 py-4 shadow-lg'>
			<Container>
				<div className="flex justify-between items-center">
					<Link to='/' className="flex items-center gap-x-3">
						<img src={Logo} alt="Logo Brand" className='w-10 h-auto' width="512" height="512" />
						<p className="text-gray-100 font-bold">Redux <span className="text-purple-400">Feed</span></p>
					</Link>

					<div className="flex gap-x-6 items-center">
						<Dropdown addStyle={'group mr-2 inline-flex lg:hidden'}>
							<span className='bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full absolute -top-2 -right-2 font-semibold'>1</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200 group-hover:text-purple-400 ease-in-out duration-300">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
							</svg>
						</Dropdown>
						<button className='flex flex-col justify-between w-8 h-6 group lg:hidden' aria-label="Mobile Menu" onClick={openMenu}>
							<span className='rounded-full w-full h-0.5 bg-gray-200 group-hover:bg-purple-400 ease-in-out duration-300'></span>
							<span className='rounded-full w-full h-0.5 bg-gray-200 group-hover:bg-purple-400 ease-in-out duration-300'></span>
							<span className='rounded-full w-full h-0.5 bg-gray-200 group-hover:bg-purple-400 ease-in-out duration-300'></span>
						</button>

					</div>

					<div className={`bg-zinc-900 z-10 lg:bg-transparent shadow-xl lg:shadow-none fixed lg:static h-full lg:h-auto min-w-[350px] lg:min-w-fit block lg:flex items-center top-0 px-6 lg:px-0 py-9 lg:py-0 ease-in-out duration-500 ${menu ? 'right-0': '-right-full'}`}>
						
						<button onClick={openMenu} className="top-0 right-0 absolute m-4 group lg:hidden" aria-label="Notifications Menu">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-300 group-hover:text-purple-800 ease-in-out duration-300">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
				  
						<ul className="ml-auto flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
							<li>
								<NavLink className="text-gray-200 font-semibold hover:text-purple-400 ease-in-out duration-300" to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink className="text-gray-200 font-semibold hover:text-purple-400 ease-in-out duration-300" to='posts'>Posts</NavLink>
							</li>
							<li>
								<NavLink className="text-gray-200 font-semibold hover:text-purple-400 ease-in-out duration-300" to='authers'>Authers</NavLink>
							</li>
							<li>
								<NavLink className="text-gray-200 font-semibold hover:text-purple-400 ease-in-out duration-300" to='about'>About</NavLink>
							</li>
						</ul>

						<span className='mx-4 text-zinc-600 hidden lg:block'>|</span>

						<Dropdown addStyle={'group mr-6 hidden lg:inline-flex'}>
							<span className='bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full absolute -top-2 -right-2 font-semibold'>1</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200 group-hover:text-purple-400 ease-in-out duration-300">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
							</svg>
						</Dropdown>
						
						<hr className='my-4 lg:hidden border-zinc-700'/>

						{
							userInfo ?
							<Popover className='relative group mr-6 hidden lg:inline-flex'>
								<Popover.Button className="outline-none items-center gap-x-1 inline-flex relative">
									<div className="flex items-center gap-x-3">
										<img src={Avatar} alt="User Avatar" className='w-12 p-2 rounded-full bg-zinc-200 h-auto' width="79" height="75" />
										<p className="text-gray-100 font-bold uppercase text-sm">{userInfo.firstName}</p>
									</div>
								</Popover.Button>
						
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute -right-12 z-10 mt-14 flex px-4 min-w-[200px]">
									<div className="flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg">
										<div className="w-full">
											<Link to='/registration/signup' className="block px-4 py-3 w-full hover:bg-purple-200 hover:text-purple-800 text-start uppercase font-medium text-gray-500 ease-in-out duration-300">Account</Link>
											<hr />
											<button onClick={logout} className="px-4 py-3 w-full hover:bg-purple-200 hover:text-purple-800 text-start uppercase font-medium text-gray-500 ease-in-out duration-300">log out</button>
										</div>
									</div>
									</Popover.Panel>
								</Transition>
							</Popover>
						
							:
							<Link to='registration/' className='lg:text-sm text-gray-100 bg-transparent lg:bg-purple-700 lg:hover:bg-purple-800 lg:py-3 lg:px-6 lg:rounded-full uppercase font-semibold ease-in-out duration-300'>Sign In</Link>
						}

					</div>
				</div>
			</Container>
		</nav>
	)
}

export default Navbar;