import React from 'react';

import avatar from '../assets/images/profile.webp'
import Section from '../components/ui/Section';
import SocialLinks from '../components/ui/SocialLinks';

import reactLogo from '../assets/images/react.webp'
import reduxLogo from '../assets/images/redux.webp'
import routerLogo from '../assets/images/router.webp'
import jsonLogo from '../assets/images/json.webp'
import tailwindLogo from '../assets/images/tailwind.webp'


const About = () => {
	return (
		<Section addStyle={''}>
				<h1 className="text-gray-700 font-bold text-2xl md:text-3xl xl:text-4xl capitalize mb-6 text-center md:text-start">About Redux Feed</h1>
				<p className="xl:text-lg text-gray-600 text-center md:text-start mb-2">Example React js app using Redux ToolKit and React Router 6 styled and decorated using Tailwind css, the backend API server using builtin json-server and json-server-auth installed in the sam reposotory.</p>
				<p className="xl:text-lg text-gray-600 text-center md:text-start mb-8">By this app visitor can view and read post, authors, sort post by category and view authors postes. and visitor can sign up for new account or login to an existing account by requsit to json-server-auth with fack tokens, to write, edit  posts.</p>
				<p className="text-gray-700 font-bold capitalize text-center mb-4 text-xl">Implemented tools and libraries</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-end justify-center gap-y-6 gap-x-9 md:gap-x-12 lg:gap-y-0 xl:gap-x-16 2xl:gap-x-20 md:w-8/12 lg:w-full xl:w-10/12 mx-auto">
					<div className="flex flex-col justify-center">
						<img src={reactLogo} alt="React Library" width='174' height='218' className='w-full h-auto' />
						<p className="text-gray-800 capitalize 2xl:text-lg font-bold text-center">React JS</p>
					</div>
					<div className="flex flex-col justify-center">
						<img src={reduxLogo} alt="Redux ToolKit" width='157' height='200' className='w-full h-auto' />
						<p className="text-gray-800 capitalize 2xl:text-lg font-bold text-center">Redux toolKit</p>
					</div>
					<div className="flex flex-col justify-center">
						<img src={routerLogo} alt="React Router" width='184' height='182' className='w-full h-auto' />
						<p className="text-gray-800 capitalize 2xl:text-lg font-bold text-center">React router</p>
					</div>
					<div className="flex flex-col justify-center">
						<img src={jsonLogo} alt="JSON Server Auth" width='147' height='197' className='w-full h-auto' />
						<p className="text-gray-800 capitalize 2xl:text-lg font-bold text-center">json Server</p>
					</div>
					<div className="flex flex-col justify-center">
						<img src={tailwindLogo} alt="tailwind css framwork" width='209' height='175' className='w-full h-auto' />
						<p className="text-gray-800 capitalize 2xl:text-lg font-bold text-center">Tailwind CSS</p>
					</div>
					
					
				</div>

				<hr className='my-6 md:my-12' />
				
				<p className="text-gray-700 font-bold capitalize mb-4 text-xl text-center md:text-start">About developer</p>
				<div className="sm:grid md:grid-cols-12 gap-9 lg:items-center bg-white p-6 rounded-xl">
						<img src={avatar} alt="Ahmad Gharaibeh Avatar" width='1588' height='1588' className='mb-8 sm:mb-0 col-span-12 md:col-span-5 lg:col-span-4 rounded-lg' />
						<div className="col-span-12 md:col-span-7 lg:col-span-8">
								<h3 className="font-bold text-xl xl:text-2xl mb-2 text-purple-700 uppercase text-center md:text-start">Ahmad Gharaibeh</h3>
								<p className="text-gray-500 font-semibold mb-2 text-center md:text-start">Senior Front-End Developer</p>
								<p className="text-gray-500 text-center md:text-start">A highly skilled and proficient Front End developer for over seven years of work experience in the Silicon Valley startups, MENA startups and agency’s. Focused and detail-oriented software engineer offering exceptional troubleshooting skills and a talent for developing innovative solutions to unusual and difficult problems. Results-driven individual contributor with a successful track record in exceeding expectations for web development initiatives.</p>
								<hr className='my-4' />
								<div className="flex items-center gap-x-4 justify-center md:justify-start">
										<p className="text-gray-500 font-bold">Follow Me:</p>
										<SocialLinks iconSize={8}/>
								</div>
						</div>
				</div>
		</Section>
	)
}

export default About
