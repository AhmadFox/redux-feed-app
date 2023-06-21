import React from 'react';

import PostList from '../components/post/PostList';
import Section from '../components/ui/Section';

const Posts = () => {
  return (
    <Section addStyle={'mx-auto lg:w-10/12 xl:w-9/12'}>
        <PostList />
    </Section>
  )
}

export default Posts;
