import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {

  return (
    <>

    <Navbar/>
    <Hero title='Become a Game Developer' subtitle='Build games like a pro'/>
    <HomeCards/>
    <JobsListings/>
    <ViewAllJobs/>



    {/* <!-- Hero --> */}
   

    {/* <!-- Developers and Employers --> */}
   

    {/* <!-- Browse Jobs --> */}
   

  

    </>
  );
}

export default App