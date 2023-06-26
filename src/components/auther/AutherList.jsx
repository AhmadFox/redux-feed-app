import React from 'react';
import { useSelector } from 'react-redux';

import AutherBox from '../../components/auther/AutherBox';

const AutherList = () => {

	const users = useSelector( state => state.users);

	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
			{ users.map( user => (
				<AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} key={user.id} id={user.id} autherName={`${user.firstName} ${user.lastName}`} postCount={user.postCount} />
			)) }
		</div>
	)
}

export default AutherList
