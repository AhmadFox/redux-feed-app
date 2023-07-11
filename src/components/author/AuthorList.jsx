import React from 'react';

import AuthorBox from './AuthorBox';

const AuthorList = ({authors}) => {

	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
			{ 
				authors.map( author => (
					<AuthorBox addStyle={'items-center bg-white p-6 rounded-xl'} key={author.id} id={author.id} authorName={author.name} postCount={author.postCount} />
				))
			}
		</div>
	)
}

export default AuthorList;



