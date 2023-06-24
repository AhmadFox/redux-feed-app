import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import store from './store/store';

// Styles
import './assets/styles/index.css';

// Layout
import Root from './layout/Root';
import Registration from './layout/Registration';

// Error
import Error from './page/Error';

// Pages
import Home from './page/Home';
import Authers from './page/Authers';
import About from './page/About';
import Posts from './page/Posts';

// Components
import LoginForm from './components/form/LoginForm';
import SignupForm from './components/form/SignupForm';
import Post from './components/post/Post';
import AutherProfile from './components/auther/AutherProfile';


// Router Map
const routers = createBrowserRouter([
  {
    // Defult Layout
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/authers',
        children: [
          {
            index: true,
            element: <Authers />
          },
          {
            path: ':id',
            element: <AutherProfile />
          }
        ]
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <Posts />
          },
          {
            path: ':postId',
            element: <Post />
          }
        ]
      }
    ]
  },
  {
    // Registration Layout
    path: '/registration',
    element: <Registration />,
    children: [
      {
        index: true,
        element: <LoginForm />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'signup',
        element: <SignupForm />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routers}/>
  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
