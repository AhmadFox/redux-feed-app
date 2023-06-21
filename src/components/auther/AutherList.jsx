import React from 'react'

import AutherBox from '../../components/auther/AutherBox';

const AutherList = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
        <AutherBox addStyle={'items-center bg-white p-6 rounded-xl'} />
    </div>
  )
}

export default AutherList
