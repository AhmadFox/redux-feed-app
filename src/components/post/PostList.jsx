import React, { Fragment } from 'react';

import PostBox from './PostBox';
import IndicatorPostList from '../indicator/IndicatorPostList';

const PostList = ({posts, loading}) => {
	
	const renderPost = posts.map((post, idx) => (
		<PostBox key={idx} post={post} />
	));

	return (
		<div className='grid gap-y-6 xl:gap-y-9'>
			{
				loading ?
				<Fragment>
					<IndicatorPostList />
					<IndicatorPostList />
					<IndicatorPostList />
				</Fragment>
				:
				renderPost
			}
		</div>
	)
}

export default PostList
