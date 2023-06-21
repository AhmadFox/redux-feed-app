import React from 'react';
import { useNavigate } from "react-router-dom";


import Section from '../components/ui/Section';

const Error = () => {

	const navigate = useNavigate();

	const redirectHome = () => {
		navigate('/', {replace: true});
	}

	return (
		<main className='h-full bg-zinc-100'>
			<Section addStyle={'h-full flex flex-col justify-center'}>
				<div className="text-center">
					<h1 className="text-7xl md:text-9xl font-bold text-purple-800 mb-4">404</h1>
					<p className="text-gray-800 text-2xl capitalize mb-4">Opps page not found</p>
					<p className="text-gray-600 mb-6">Something went wrong while using the route page, or the page you are trying to access does not exist. <br /> Please try again or go back to the home page.</p>
					<button onClick={redirectHome} className='px-6 py-3 text-sm capitalize text-white rounded-lg font-semibold bg-purple-800 hover:bg-purple-900 ease-in-out duration-300'>Home Page</button>
				</div>
			</Section>
		</main>
	)
}

export default Error
