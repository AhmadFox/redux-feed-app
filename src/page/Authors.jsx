import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAuthors } from '../store/authorSlice';

import Section from '../components/ui/Section';
import AuthorList from '../components/author/AuthorList';

const Authors = () => {

	const dispatch = useDispatch();
	const { authors, isLoading } = useSelector( (state) => state.authors);

	useEffect(() => {

		dispatch(getAuthors(''))

	}, [ dispatch ]);

	return (
		<Section>
			{
				authors.length > 0 ?
				<Fragment>
					<h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-6 md:mb-8 uppercase text-center lg:text-start">Authors List:</h1>
					{
						isLoading ?
							<AuthorList authors={authors}/>
						: <p>Loading .. </p>
					}
					
				</Fragment> :
				
				<p className="text-center text-2xl xl:text-3xl capitalize font-bold text-gray-500">no Author Found!</p>
			}

		</Section>
	)
}

export default Authors
