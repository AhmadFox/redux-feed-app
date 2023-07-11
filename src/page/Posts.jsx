import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPosts } from '../store/postSlice';

import PostList from '../components/post/PostList';
import Section from '../components/ui/Section';

const Posts = () => {

	const disbatch = useDispatch();
	const { posts, isLoading } = useSelector((state) => state.posts);
	
	useEffect(() => {

		disbatch(getPosts());
		
	}, [disbatch]);

	return (
		<Section addStyle={'mx-auto lg:w-10/12 xl:w-9/12'}>
		
			{
				posts.length > 0 ?
				<Fragment>
					<h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-6 md:mb-8 uppercase text-center lg:text-start">Posts List:</h1>
					<PostList posts={posts} loading={isLoading} />
					
				</Fragment> :
				<p className="text-center text-2xl xl:text-3xl capitalize font-bold text-gray-500">no Post Found!</p>
			}
			
		</Section>
	)
}

export default Posts;
