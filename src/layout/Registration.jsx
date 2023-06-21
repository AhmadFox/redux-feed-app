import React, { Fragment } from 'react'
import { Route, Routes, Outlet, Link } from 'react-router-dom';

import Logo from '../assets/images/logo.svg'
import Section from '../components/ui/Section';

const Registration = () => {

	return (
		<Fragment>
			<Link to='/' className='uppercase font-medium px-6 py-2 text-sm rounded-md text-purple-100 lg:text-purple-800 absolute right-0 m-4 border border-purple-100 hover:border-purple-800 lg:border-purple-800 hover:bg-purple-800 hover:text-purple-100 ease-in-out duration-300'>Home</Link>
			<main className="lg:h-full grid lg:grid-cols-2">
				<Section addStyle={'lg:h-full bg-zinc-900 lg:bg-zinc-800 flex flex-col item-center justify-center'}>
					<img src={Logo} alt="Logo Brand" className='w-24 lg:w-36 mx-auto mb-4 xl:mb-6 h-auto' width="512" height="512" />
					<Routes>
						<Route path="/*" element={
							<Fragment>
								<h1 className="text-purple-100 font-bold text-4xl xl:text-6xl text-center uppercase mb-4 xl:mb-8">Sign In</h1>
								<p className="text-purple-100 text-center text-xl xl:text-2xl capitalize font-medium">Login to your Account</p>                        
							</Fragment>

						} />
						<Route path="/signup" element={
							<Fragment>
								<h1 className="text-purple-100 font-bold text-4xl xl:text-6xl text-center uppercase mb-4 xl:mb-8">Sign Up</h1>
								<p className="text-purple-100 text-center text-xl xl:text-2xl capitalize font-medium">Create New Account</p>                        
							</Fragment>

						} />
						
					</Routes>
					
				</Section>
				<Section addStyle={'bg-zinc-100 lg:h-full flex flex-col justify-center items-center'}>
					<div className="xl:w-9/12 2xl:w-7/12 mx-auto">
						<Outlet />
						<Routes>
							<Route path="/*" element={
								<p className="text-center mt-6 text-gray-600">Dont have account? <Link to='signup' className='text-purple-800'>Create New Account</Link></p>
							} />

							<Route path="/signup" element={
								<p className="mt-6 col-span-2 text-gray-600 text-center">Already have account? <Link to='/registration' className='text-purple-800'>Log In</Link></p>
							} />
						</Routes>
						
					</div>
					
				</Section>
			</main>
		</Fragment>
	)
}

export default Registration
