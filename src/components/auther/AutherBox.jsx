import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-mono.png';

const AutherBox = (props) => {
    
  return (
      <Link to={`/authers/${props.id}`} key={props.id} className={`flex ${props.addStyle}`}>
          <img src={Logo} alt="Logo Brand" className='w-14 p-3 rounded-2xl bg-zinc-200 h-auto mr-4' width="79" height="75" />
          <div className="">
              <p className="text-gray text-purple-600 font-medium uppercase text-sm mb-2">{props.autherName}</p>
              <p className="text-sm text-gray-600">Articals: {props.postCount}</p>
          </div>
      </Link>
  )
}

export default AutherBox
