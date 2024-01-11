import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Main from './Main';
import Login from'./components/login/Login';
import SignUp from './components/signup/SignUp';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/homepage/Homepage';

const router = createBrowserRouter([
  {path:'/',
   element:<Main/>,
  errorElement: <Errorpage/>
},
{
  path: '/login',
  element: <Login/>,
  errorElement: <Errorpage/>
},
{
  path: '/signup',
  element: <SignUp/>,
  errorElement: <Errorpage/>
},
{
  path: '/homepage', //path params
  element: <Homepage/>,
  errorElement: <Errorpage/>
  
},
{
  path: '/homepage/:userid', //path params
  element: <Homepage/>
  
}
])

function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <RouterProvider router={router}/>
        </React.StrictMode>
    </div>
  );
}

export default App;
