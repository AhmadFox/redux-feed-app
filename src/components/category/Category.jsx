import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { getSingleCategory } from '../../store/categorySlice';
import { getPosts } from '../../store/postSlice';

import Section from '../ui/Section';
import PostList from '../post/PostList';

const Category = () => {

	const dispatch = useDispatch();
	const { categoryId } = useParams();
	const category = useSelector(state => state.categorys.category);
	const { posts } = useSelector( (state) => state.posts);

	const relatedPosts = posts.filter((posts) => posts.category.id === categoryId);

	useEffect(() => {

		dispatch(getSingleCategory(categoryId));

		dispatch(getPosts());

	}, [ dispatch ]);

	return (
		<Section addStyle={"w-11/12 lg:w-10/12 xl:w-9/12 mx-auto"}>

			<div className="flex items-center justify-between">
				<p className={`text-xl xl:text-3xl font-bold capitalize text-${category.color}`}>{category && category.name}</p>
				<p className="font-semibold text-gray-600 capitalize">{category && category.postCount} Posts</p>
			</div>

			<hr className='my-6' />

			<PostList posts={relatedPosts} />

		</Section>
	)
}

export default Category;
