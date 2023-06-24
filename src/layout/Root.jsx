import React, { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import AddPostBtn from '../components/post/AddPostBtn';
import Footer from "../components/Footer";
import Modal from '../components/ui/Modal';
import LoginForm from '../components/form/LoginForm';
import PostForm from '../components/form/PostForm';

const Root = () => {

  const [ ModalPost, setModalPost ] = useState(false);
  const [ ModalLogin, setModalLogin ] = useState(false);

  const openModal = (param) => {
    setModalPost(param)
  }


  return (
    <Fragment>
    
        <Navbar />

        <main className="bg-zinc-100">

          <Outlet />

          <AddPostBtn openModal={openModal} />
          
          </main>
          
          <Footer />
          

          <Modal heading={'Sign In'} show={ModalLogin} setShow={setModalLogin}>
          <div className="p-6">
            <LoginForm addStyle='mb-6' />
            <p className="text-center text-gray-500">Dont have account? <Link to='registration/signup' className='text-purple-800'>Create new Account</Link></p>
          </div>
        </Modal>

        <Modal heading={'Create Post'} show={ModalPost} setShow={setModalPost}>
          <div className="p-6">
            <PostForm isModal={setModalPost} />
          </div>
        </Modal>

    </Fragment>
  )
}

export default Root
