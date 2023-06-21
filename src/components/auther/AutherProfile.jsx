import React from 'react';

import Section from '../ui/Section';
import PostList from '../post/PostList';
import AutherBox from './AutherBox';

const AutherProfile = () => {
	return (
		<Section addStyle={'lg:w-10/12 mx-auto'}>
			<AutherBox addStyle={'mb-6'} />

			<p className='text-gray-600'>Bio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iusto dicta animi, quam quasi, ducimus quos architecto autem, quia maiores placeat officiis? Voluptatibus in fuga consequatur ullam ab quo.</p>
			<hr className="my-6" />

			<PostList />

		</Section>
	)
}

export default AutherProfile
