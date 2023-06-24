import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import PostForm from '../form/PostForm';

const Post = () => {
    const [ open, setOpen ] = useState(false);

    const { postId } = useParams();

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    );

    // Show/Hide Post Form
    const editPostHandler = () => {
        setOpen(true)
    }

    // Colose Editing Mood if Post Changed
	useEffect(() => {
		setOpen(false)
	}, [post.id]);

  return (
    <Section addStyle={'w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'}>
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 order-2 xl:order-1 xl:pr-6">

            {
                open ?
                <Fragment>
                    <p className="text-purple-700 mb-4 font-bold text-2xl">Edit Post</p>
                    <PostForm btnCaption={'Save'} setSave={setOpen} post={post} />
                </Fragment>
                :
                <Fragment>
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-gray-700 text-xl md:text-2xl xl:text-3xl font-bold">{post.title}</h1>
                        <button onClick={editPostHandler} className='uppercase text-purple-700 font-medium hover:text-purple-800 ease-in-out duration-300'>edit</button>
                    </div>

                    <div className="flex items-center gap-x-3 mb-6">
                        <span className='text-gray-600 font-medium'>By: <Link to={`/authers/${post.user[0].id}`} className='text-purple-600'>{post.user[0].name}</Link></span>
                        <span className='text-gray-600'>|</span>
                        <span className='text-gray-600 font-medium'>{post.date}</span>
                    </div>
                    
                    <p className='text-gray-600 md:text-lg mb-6'>{post.content}</p>
                    

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
                </Fragment>
            }
            

            <hr className='my-9' />

            <p className="font-bold text-lg md:text-xl xl:text-2xl text-gray-600 mb-6">More By {post.user[0].name}</p>

            <PostList />

        </div>
    </Section>
  )
}

export default Post
