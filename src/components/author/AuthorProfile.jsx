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

	

	useEffect(() => {

		disbatch(getAuthors(parseInt(userId)));
		disbatch(getPosts());

	}, [ disbatch ]);

	const relatedPost = posts.filter( post => post.author.id === parseInt(userId));

	return (
		<Section addStyle={'lg:w-10/12 mx-auto'}>
			{
			  !isLoading && 
				<Fragment>
					<AuthorBox addStyle={'mb-6'} key={authors.id} id={authors.id} authorName={authors.name} postCount={authors.postCount} />
		
					<p className='text-gray-600'><b>Bio:</b> {authors.bio}</p>
				</Fragment>
			}

			<hr className="my-6" />

			<p className="text-gray-600 font-bold text-lg md:text-xl mb-4">Author Posts:</p>

			{
				relatedPost && <PostList posts={relatedPost} loading={isLoading} />
			}

		</Section>
	)
}

export default AuthorProfile
