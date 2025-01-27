import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

import HomePage from './pages/HomePage';


const router = createBrowserRouter(

  createRoutesFromElements(<Route path='/about' element={<HomePage/>}/>)

);
const App = () => {

  return (

    <RouterProvider router={router}/>
    

   



   

  

  
  );
}

export default App