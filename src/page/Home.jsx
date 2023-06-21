import React from 'react'

import Section from '../components/ui/Section';
import SideBar from '../components/SideBar';
import PostForm from '../components/form/PostForm';
import PostList from '../components/post/PostList';

const Home = () => {
	return (
		<Section>
			<div className="grid grid-cols-12 gap-x-6">

				<div className="col-span-12 xl:col-span-8 2xl:col-span-9 order-2 xl:order-1 xl:pr-6">

					<p className="text-gray-800 text-xl font-bold capitalize mb-4">create post</p>
					<PostForm />

					<hr className='my-6' />
					<p className="text-gray-700 text-xl font-bold mb-6">Post Feeds</p>

					<PostList />

				</div>

				<div className="col-span-12 xl:col-span-4 2xl:col-span-3 order-1 xl:order-2">

					<SideBar />
					 
				</div>

			</div>
		</Section>
	)
}

export default Home
