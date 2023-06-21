import React from 'react';
import Section from './ui/Section';
import { Link } from 'react-router-dom';
import SocialLinks from './ui/SocialLinks';

const Footer = () => {
	return (
		<footer className="bg-white">
			<Section addStyle={'!py-4'}>
				<div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between items-center">
					<p className="text-gray-500 text-sm">By: <Link target='_blank' to="https://github.com/AhmadFox" className=" text-gray-500 hover:text-purple-800 ease-in-out duration-300 text-sm">Ahmad Gharaibeh</Link></p>
					<SocialLinks iconSize={6} />
				</div>
			</Section>
		</footer>
	)
}

export default Footer;
