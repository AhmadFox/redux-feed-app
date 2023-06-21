import React from 'react';

import Image from '../assets/images/profile.webp'
import Section from '../components/ui/Section';
import SocialLinks from '../components/ui/SocialLinks';

const About = () => {
  return (
    <Section addStyle={''}>
        <h1 className="text-gray-700 font-bold text-2xl md:text-3xl xl:text-4xl uppercase mb-9">About App</h1>

        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci soluta voluptatibus recusandae facilis incidunt reiciendis enim fugiat alias neque illum voluptatem amet architecto praesentium magnam quibusdam, quo quasi blanditiis!</p>

        <hr className='my-6' />
        
        <h2 className="text-gray-700 font-bold capitalize mb-4 text-xl">creator developer</h2>
        <div className="grid md:grid-cols-12 gap-9 lg:items-center bg-white p-6 rounded-xl">
            <img src={Image} alt="Ahmad Gharaibeh Avatar" width='1200' height='1200' className='col-span-12 md:col-span-5 lg:col-span-4 rounded-lg' />
            <div className="md:col-span-7 col-span-12 lg:col-span-8">
                <h3 className="font-bold text-xl xl:text-2xl mb-2 text-purple-700 uppercase">Ahmad Gharaibeh</h3>
                <p className="text-gray-500 font-semibold mb-2">Senior Front-End Developer</p>
                <p className="text-gray-500">A highly skilled and proficient Front End developer for over seven years of work experience in the Silicon Valley startups, MENA startups and agency’s. Focused and detail-oriented software engineer offering exceptional troubleshooting skills and a talent for developing innovative solutions to unusual and difficult problems. Results-driven individual contributor with a successful track record in exceeding expectations for web development initiatives.</p>
                <hr className='my-4' />
                <div className="flex items-center gap-x-4">
                    <p className="text-gray-500 font-bold">Follow Me:</p>
                    <SocialLinks iconSize={8}/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default About
