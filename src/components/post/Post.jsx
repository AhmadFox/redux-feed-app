import React from 'react';

import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import PostList from './PostList';

const Post = ({props}) => {

  return (
    <Section addStyle={'w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'}>
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 order-2 xl:order-1 xl:pr-6">
        
            <h1 className="text-gray-700 text-xl md:text-2xl xl:text-3xl font-bold mb-6">Post Heading</h1>

            <div className="flex items-center gap-x-3 mb-6">
                <span className='text-gray-600 font-medium'>By: <Link to='/authers/11' className='text-purple-600'>Ahmad Gharaibeh</Link></span>
                <span className='text-gray-600'>|</span>
                <span className='text-gray-600 font-medium'>12 Jun 2023</span>
            </div>
            
            <p className='text-gray-600 md:text-lg mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint dignissimos aspernatur illum distinctio at, quaerat nulla expedita harum ad? Voluptate, cumque ipsum nesciunt laborum praesentium quas veritatis autem quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint dignissimos aspernatur illum distinctio at, quaerat nulla expedita harum ad? Voluptate, cumque ipsum nesciunt laborum praesentium quas veritatis autem quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint dignissimos aspernatur illum distinctio at, quaerat nulla expedita harum ad? Voluptate, cumque ipsum nesciunt laborum praesentium quas veritatis autem quam?</p>
            

            <ul className="flex items-center gap-x-5 mb-4">
                <li>
                    <button className='flex items-center text-gray-600'>👍 <span className='ml-2'>0</span></button>
                </li>
                <li>
                    <button className='flex items-center text-gray-600'>❤️ <span className='ml-2'>0</span></button>
                </li>
                <li>
                    <button className='flex items-center text-gray-600'>🎉 <span className='ml-2'>0</span></button>
                </li>
                <li>
                    <button className='flex items-center text-gray-600'>👀 <span className='ml-2'>0</span></button>
                </li>
            </ul>

            <hr className='my-9' />

            <p className="font-bold text-lg md:text-xl xl:text-2xl text-gray-600 mb-6">More By Auther</p>

            <PostList />

        </div>
    </Section>
  )
}

export default Post
