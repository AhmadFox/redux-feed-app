import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../../store/authSlice';

import InputBox from './InputBox';

const SignupForm = () => {
	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confermPassword, setConfermPassword] = useState('');
	const [ validForm, setValidForm ] = useState(false);

	// Form Valedation And Set Field Value
	const onChangeHandler = (e) => {
		
		e.target.name === 'fName' && setFirstName(e.target.value)
		e.target.name === 'lName' && setLastName(e.target.value)
		e.target.name === 'email' && setEmail(e.target.value)
		e.target.name === 'fPassword' && setPassword(e.target.value)
		e.target.name === 'sPassword' && setConfermPassword(e.target.value)

		e.target.value === '' ? e.target.classList.add('invalid') : e.target.classList.remove('invalid')

	}

	useEffect(() => {

		const formFields = document.querySelectorAll('[required]')
		formFields.forEach(el => {
			firstName === '' || lastName === '' || email === '' || password === '' || confermPassword === '' || password !== confermPassword ? setValidForm(false) : setValidForm(true)
		});
		

	}, [firstName, lastName, email, password, confermPassword])


	// Dispatch data to reducer
	const dispatch = useDispatch();

	const submitHandler = (event) => {

		event.preventDefault();
		validForm && dispatch( createUser({ firstName, lastName, email, password }) );

	}

	return (
		<form onSubmit={submitHandler} className='grid grid-cols-2 gap-y-4 gap-x-3'>
			<div className="">
				<label className="mb-2 text-gray-700 capitalize block font-medium">First name:</label>
				<InputBox name='fName' action={onChangeHandler} holder={'Ex: John'} required={true} type={'text'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
			</div>
			<div className="">
				<label className="mb-2 text-gray-700 capitalize block font-medium">Last name:</label>
				<InputBox name='lName' action={onChangeHandler} holder={'Ex: Doe'} required={true} type={'text'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
			</div>
			<div className="col-span-2">
				<label className="mb-2 text-gray-700 capitalize block font-medium">Email address:</label>
				<InputBox name='email' action={onChangeHandler} holder={'Ex: example@domain.com'} required={true} type={'email'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
			</div>
			<div className="col-span-2">
				<label className="mb-2 text-gray-700 capitalize block font-medium">Password:</label>
				<InputBox name='fPassword' action={onChangeHandler} holder={'Ex: xxxxxx'} required={true} type={'password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
			</div>
			<div className="col-span-2">
				<label className="mb-2 text-gray-700 capitalize block font-medium">Conferm Password:</label>
				<InputBox name='sPassword' action={onChangeHandler} holder={'Ex: xxxxxx'} required={true} type={'password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
			</div>
			<button disabled={!validForm} className='col-span-2 mt-2 bg-purple-800 text-purple-100 hover:bg-purple-900 ease-in-out duration-300 px-6 py-3 rounded-md uppercase font-bold'>Sign Up</button>
		</form>
	)
}

export default SignupForm