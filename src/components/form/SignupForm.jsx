import React from 'react';
import { useNavigate } from "react-router-dom";

import InputBox from './InputBox';

const SignupForm = () => {

    const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		navigate('/');
	}

  return (
    <form onSubmit={submitHandler} className='grid grid-cols-2 gap-y-4 gap-x-3'>
      <div className="">
        <label className="mb-2 text-gray-700 capitalize block font-medium">First name:</label>
        <InputBox holder={'Ex: John'} type={'text'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
      </div>
      <div className="">
        <label className="mb-2 text-gray-700 capitalize block font-medium">Last name:</label>
        <InputBox holder={'Ex: Doe'} type={'text'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
      </div>
      <div className="col-span-2">
        <label className="mb-2 text-gray-700 capitalize block font-medium">Email address:</label>
        <InputBox holder={'Ex: example@domain.com'} type={'email'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
      </div>
      <div className="col-span-2">
        <label className="mb-2 text-gray-700 capitalize block font-medium">Password:</label>
        <InputBox holder={'Ex: XXXXXX'} type={'password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
      </div>
      <div className="col-span-2">
        <label className="mb-2 text-gray-700 capitalize block font-medium">Conferm Password:</label>
        <InputBox holder={'Ex: XXXXXX'} type={'password'} addStyle={'bg-purple-50 border border-purple-300 w-full'}/>
      </div>
      <button className='col-span-2 mt-2 bg-purple-800 text-purple-100 hover:bg-purple-900 ease-in-out duration-300 px-6 py-3 rounded-md uppercase font-bold'>Sign Up</button>
    </form>
  )
}

export default SignupForm
