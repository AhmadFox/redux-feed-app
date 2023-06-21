import React from 'react';

import Section from '../components/ui/Section';
import AutherList from '../components/auther/AutherList';

const Authers = () => {
  return (
    <Section>
        <h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-6 md:mb-8 uppercase text-center lg:text-start">Post Authers</h1>
        <AutherList />
    </Section>
  )
}

export default Authers
