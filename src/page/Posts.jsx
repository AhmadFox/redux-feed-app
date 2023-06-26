import React from 'react';

import { useSelector } from 'react-redux';

import PostList from '../components/post/PostList';
import Section from '../components/ui/Section';

const Posts = () => {

  const posts = useSelector( state => state.posts);

  return (
    <Section addStyle={'mx-auto lg:w-10/12 xl:w-9/12'}>
        <PostList posts={posts} />
    </Section>
  )
}

export default Posts;
