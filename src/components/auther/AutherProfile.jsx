import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Section from '../ui/Section';
import PostList from '../post/PostList';
import AutherBox from './AutherBox';

const AutherProfile = () => {

	const { userId } = useParams();

	const user = useSelector( state => 
		state.users.find( user => user.id == userId)
	);

	const posts = useSelector( state => 
		state.posts.filter( post => post.user.id == userId)
	);

	return (
		<Section addStyle={'lg:w-10/12 mx-auto'}>
			<AutherBox addStyle={'mb-6'} key={user.id} id={user.id} autherName={`${user.firstName} ${user.lastName}`} postCount={user.postCount} />

			<p className='text-gray-600'>Bio: {user.bio}</p>
			<hr className="my-6" />

			<p className="text-gray-600 font-bold text-lg md:text-xl mb-4">Auther Posts:</p>

			<PostList posts={posts} />

		</Section>
	)
}

export default AutherProfile
