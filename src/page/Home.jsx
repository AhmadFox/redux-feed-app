import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../store/postSlice';

import Section from '../components/ui/Section';
import SideBar from '../components/SideBar';
import PostForm from '../components/form/PostForm';
import PostList from '../components/post/PostList';

const Home = () => {
	
	const disbatch = useDispatch();
	const { posts, isLoading } = useSelector((state) => state.posts);
	const { user } = useSelector((state) => state.auth.user);
	
	useEffect(() => {
        disbatch(getPosts());
    }, [disbatch]);

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
				
				{
					posts.length > 0 ?
					<Fragment>

						<p className="text-gray-700 text-xl font-bold mb-6">Post Feeds</p>
						<PostList posts={posts} loading={isLoading} />

					</Fragment>

					:
					<Fragment>
						<p className="text-center text-2xl xl:text-3xl capitalize font-bold text-gray-500 mb-3">no Post Found!</p>
						{
							!user ?
							<p className="text-gray-500 text-center capitalize">
								<Link to='/registration/signup' className='font-medium text-purple-700'>Signup</Link> or 
								<Link to='/registration' className='font-medium text-purple-700'> Login</Link> to publish post
							</p> : ''
						}
							
					</Fragment>
				}

				</div>

				<div className="col-span-12 xl:col-span-4 2xl:col-span-3 order-1 xl:order-2">

					<SideBar />
					 
				</div>

			</div>
		</Section>
	)
}

export default Home
