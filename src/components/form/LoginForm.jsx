import React from 'react';
import { useNavigate } from "react-router-dom";

import InputBox from './InputBox';

const LoginForm = ({addStyle}) => {
  
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		navigate('/');
	}

	return (
	<form onSubmit={submitHandler} className={`grid gap-y-6 ${addStyle}`}>
		<div className="">
			<label className="mb-2 text-purple-700 capitalize block font-medium">Email address:</label>
			<InputBox type={'Ex: example@domain.com'} holder={'User Name or Email Addres'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
		</div>
		<div className="">
			<label className="mb-2 text-purple-700 capitalize block font-medium">Password:</label>
			<InputBox type={'Ex: XXXXXX'} holder={'Password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
		</div>
		<button className='bg-purple-800 text-purple-100 hover:bg-purple-900 ease-in-out duration-300 px-6 py-3 rounded-md uppercase font-bold'>Log In</button>
	</form>
	)
}

export default LoginForm;
