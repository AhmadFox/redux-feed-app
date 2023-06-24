import React from 'react';
import { useSelector } from 'react-redux';

import PostBox from './PostBox';

const PostList = () => {

	const posts = useSelector(state => state.posts)

	const postsRender = posts.map((post, idx) => (
		<PostBox key={idx} post={post} />
	));
	
	return (
		<div className='grid gap-y-6 xl:gap-y-9'>
			{postsRender}
		</div>
	)
}

export default PostList
