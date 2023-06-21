import React from 'react';

import PostBox from './PostBox';

const PostList = () => {

	const posts = [
		{id: '1', title: 'First Post!', content: 'Hello', date: '12 Jun 2023', user: [{name: 'Ahmad Gharaibeh'}, {id: 1}, {account: 'admin'}]},
		{id: '2', title: 'Secound Post!', content: 'More Next', date: '7 Jun 2023', user: [{name: 'John Doe'}, {id: 2}, {account: 'auther'}]},
		{id: '3', title: 'Therd Post!', content: 'Lorm Ipsom', date: '22 May 2023', user: [{name: 'Semantha Lowe'}, {id: 3}, {account: 'auther'}]},
	];

	const postsRender = posts.map(item => (
		<PostBox key={item.id} title={item.title} content={item.content} id={item.id} user={item.user} date={item.date} />
	));
	
	return (
		<div className='grid gap-y-6 xl:gap-y-9'>
			{postsRender}
		</div>
	)
}

export default PostList
