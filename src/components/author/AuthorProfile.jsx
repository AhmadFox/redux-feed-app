import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAuthor } from '../../store/authorSlice';
import { getPosts } from '../../store/postSlice';

import Section from '../ui/Section';
import PostList from '../post/PostList';
import AuthorBox from './AuthorBox';

const AuthorProfile = () => {

	const { userId } = useParams();
	const disbatch = useDispatch();

	const { author, isLoading } = useSelector( (state) => state.authors);

	console.log(author);
	const { posts } = useSelector((state) =>  state.posts);

	useEffect(() => {

		disbatch(getAuthor(parseInt(userId)));
		disbatch(getPosts());

	}, [ disbatch ]);

	const relatedPost = posts.filter( post => post.author.id === parseInt(userId));

	return (
		<Section addStyle={'lg:w-10/12 mx-auto'}>
			{
			author && 
				<Fragment>
					<AuthorBox addStyle={'mb-6'} key={author.id} id={author.id} authorName={author.name} postCount={author.postCount} />
		
					<p className='text-gray-600'><b>Bio:</b> {author.bio}</p>
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
