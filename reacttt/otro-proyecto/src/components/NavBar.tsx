import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Page from '../pages/Page';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const NavBar = () => {
  return (
    <>
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
        <ul>
        <Link to="/home"className='navbar-brand text-uppercase'>Home</Link>
        <Link to="/page"className='navbar-brand text-uppercase'>Page</Link>
        </ul>  
        </div>
    </nav>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/page' element={<Page/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default NavBar