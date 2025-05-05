import React, { useEffect } from 'react';
import logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import AuthButtons from '../authbutton';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div style={{display: "flex", alignItems:"center", justifyContent: "space-between"}}>
        <div className='logo'>
          <img src={logo} alt='Logo Illustration'/>
        </div>
        <nav className='links'>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/contact' className='contact'>Contact</Link>
          <Link to='/faq' className='faq'>FAQ</Link>
          <Link href='/login' className='login'>Login</Link>
        </nav>
        <AuthButtons />
        </div>
        
  );
};

export default Navbar;