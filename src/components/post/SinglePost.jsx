import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getPosts, getSinglePost } from "../../store/postSlice";

import Section from "../ui/Section";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "../form/PostForm";

const SinglePost = () => {

  const [open, setOpen] = useState(false);
  const [ edit, setEdit] = useState(false);
  const { postId } = useParams();

  const { user } = useSelector((state) => state.auth.user);
  const { post } = useSelector((state) => state.posts);
  const { posts } = useSelector((state) => state.posts);
  
  const disbatch = useDispatch();

  // Get Related Post For User
  const authorId = post && post.author.id;
  const relatedPosts =
	posts && posts.filter((posts) => posts.author.id == authorId && posts.id != postId);

  // Show/Hide Post Form
  const editPostHandler = () => {

	setOpen(true);
	
  };

  useEffect(() => {

	// fetch Single Post & All Posts
	disbatch(getSinglePost(postId));
	disbatch(getPosts());

	// Colose Editing Mood if Post Changed
	setOpen(false);

	// Check if post for current loggedin user
	user && user.id === authorId ? setEdit(true) : setEdit(false);
		
  }, [edit, disbatch, postId, post && post.id, user && user]);

  return (
	<Section addStyle={"w-11/12 lg:w-10/12 xl:w-9/12 mx-auto"}>
	  <div className="col-span-12 xl:col-span-8 2xl:col-span-9 order-2 xl:order-1 xl:pr-6">
		{open ? (
		  <Fragment>
			<p className="text-purple-700 mb-4 font-bold text-2xl">Edit Post</p>
			<PostForm btnCaption={"Save"} setSave={setOpen} post={post} />
		  </Fragment>
		) : (
		  post ? (
			<Fragment>
			  <div className="flex items-start justify-between mb-6">
				<h1 className="text-gray-700 text-xl md:text-2xl xl:text-3xl font-bold">
				  {post.title}
				</h1>
				{
					edit && 
					<button
					  onClick={editPostHandler}
					  className="uppercase text-purple-700 font-medium hover:text-purple-800 ease-in-out duration-300"
					>
					  edit
					</button>
				}
			  </div>

			  <div className="flex justify-between items-center mb-6">
				<div className="flex items-center gap-x-3">
				  <span className="text-gray-600 font-medium">
					By:{" "}
					<Link
					  to={`/authors/${post.author.id}`}
					  className="text-purple-600"
					>
					  {post.author.name}
					</Link>
				  </span>
				  <span className="text-gray-600">|</span>
				  <span className="text-gray-600 font-medium">{post.date}</span>
				</div>
				<Link to={`/category/${post.category.id}`} className={`px-4 py-2 rounded-full uppercase font-semibold text-xs text-white bg-${post.category.color}`}>{post.category.name}</Link>
			  </div>

			  <p className="text-gray-600 md:text-lg mb-6">{post.content}</p>

			  <ul className="flex items-center gap-x-5 mb-4">
				<li>
				  <button className="flex items-center text-gray-600">
					👍 <span className="ml-2">0</span>
				  </button>
				</li>
				<li>
				  <button className="flex items-center text-gray-600">
					❤️ <span className="ml-2">0</span>
				  </button>
				</li>
				<li>
				  <button className="flex items-center text-gray-600">
					🎉 <span className="ml-2">0</span>
				  </button>
				</li>
				<li>
				  <button className="flex items-center text-gray-600">
					👀 <span className="ml-2">0</span>
				  </button>
				</li>
			  </ul>
			</Fragment>
		  ) : ''
		)}

		{relatedPosts.length > 0 ? (
		  <Fragment>
			<hr className="my-9" />
			<p className="font-bold text-lg md:text-xl xl:text-2xl text-gray-600 mb-6">
			  More By {post.author.name}
			</p>
			<PostList posts={relatedPosts} />
		  </Fragment>
		) : (
		  ""
		)}
	  </div>
	</Section>
  );
};

export default SinglePost;
