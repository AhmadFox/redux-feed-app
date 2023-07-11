import React, { Fragment } from 'react';

import PostBox from './PostBox';
import IndicatorPostList from '../indicator/IndicatorPostList';
  

const PostList = ({posts, loading}) => {
	
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
				posts && posts.map((post) => (
					<PostBox key={post.id} post={post} />
				))
			}
		</div>
	)
}

export default PostList
