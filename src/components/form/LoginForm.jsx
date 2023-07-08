import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/authSlice';

import InputBox from './InputBox';

const LoginForm = ({addStyle}) => {

	const dispatch = useDispatch();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ validForm, setValidForm ] = useState(false);

	// Form Valedation And Set Field Value
	const onChangeHandler = (e) => {
	
		e.target.name === 'email' && setEmail(e.target.value)
		e.target.name === 'password' && setPassword(e.target.value)

		e.target.value === '' ? e.target.classList.add('invalid') : e.target.classList.remove('invalid')

	}

	useEffect(() => {

		const formFields = document.querySelectorAll('[required]')
			formFields.forEach(el => {
			email === '' || password === '' ? setValidForm(false) : setValidForm(true)
		});

		// user && navigate('/')

	}, [ email, password, validForm ])

	// Dispatch data to reducer
	const submitHandler = (event) => {

		event.preventDefault();
		validForm && dispatch( loginUser({ email, password }) );

	}


	return (
	<form onSubmit={submitHandler} className={`grid gap-y-6 ${addStyle}`}>
		<div className="">
			<label className="mb-2 text-gray-700 capitalize block font-medium">Email address:</label>
			<InputBox name='email' action={onChangeHandler} holder={'Ex: example@domain.com'} required={true} type={'email'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
		</div>
		<div className="">
			<label className="mb-2 text-gray-700 capitalize block font-medium">Password:</label>
			<InputBox name='password' action={onChangeHandler} holder={'Ex: xxxxxx'} required={true} type={'password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
		</div>
		<button disabled={!validForm} className='bg-purple-800 text-purple-100 hover:bg-purple-900 ease-in-out duration-300 px-6 py-3 rounded-md uppercase font-bold'>Log In</button>
	</form>
	)
}

export default LoginForm;
