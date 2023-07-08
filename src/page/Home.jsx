import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Section from '../components/ui/Section';
import SideBar from '../components/SideBar';
import PostForm from '../components/form/PostForm';
import PostList from '../components/post/PostList';

const Home = () => {

	const posts = useSelector( state => state.posts);
	const { user } = useSelector((state) => state.auth.user);

	return (
		<Section>
			<div className="grid grid-cols-12 gap-x-6">

				<div className="col-span-12 xl:col-span-8 2xl:col-span-9 order-2 xl:order-1 xl:pr-6">

				{
					user && 
					<Fragment>
						<p className="text-gray-800 text-xl font-bold capitalize mb-4">create post</p>
						<PostForm />
						<hr className='my-6' />
					</Fragment>
				}
					

				<p className="text-gray-700 text-xl font-bold mb-6">Post Feeds</p>
				
				<PostList posts={posts} />
				
				</div>

				<div className="col-span-12 xl:col-span-4 2xl:col-span-3 order-1 xl:order-2">

					<SideBar />
					 
				</div>

			</div>
		</Section>
	)
}

export default Home
