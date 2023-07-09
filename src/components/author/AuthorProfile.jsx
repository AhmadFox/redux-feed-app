import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAuthors } from '../../store/authorSlice';
import { getPosts } from '../../store/postSlice';

import Section from '../ui/Section';
import PostList from '../post/PostList';
import AuthorBox from './AuthorBox';

const AuthorProfile = () => {

	const { userId } = useParams();
	const disbatch = useDispatch();
	const { authors, isLoading } = useSelector( (state) => state.authors);
	const { posts } = useSelector((state) =>  state.posts);

	const postList = posts && posts.filter( post => post.author.id === userId)


	console.log(userId);


	useEffect(() => {

		disbatch(getAuthors(userId));
		disbatch(getPosts());

	}, [ disbatch ]);


	return (
		<Section addStyle={'lg:w-10/12 mx-auto'}>
			{
			  !isLoading && 
				<Fragment>
					<AuthorBox addStyle={'mb-6'} key={authors.id} id={authors.id} authorName={authors.name} postCount={authors.postCount} />
		
					<p className='text-gray-600'>Bio: {authors.bio}</p>
				</Fragment>
			}

			<hr className="my-6" />

			<p className="text-gray-600 font-bold text-lg md:text-xl mb-4">Author Posts:</p>

			{
				posts && <PostList posts={postList} />
			}

		</Section>
	)
}

export default AuthorProfile
