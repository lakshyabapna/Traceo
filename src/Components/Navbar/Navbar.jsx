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
      <div className='navbar'>
        <div className='logo'>/
          <img src={logo} alt='Logo Illustration' className='img'/>
        </div>
        <nav className='links'>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/contact' className='contact'>Contact</Link>
          <Link to='/faq' className='faq'>FAQ</Link>
        </nav>
        <div className='authbutton'>
          <AuthButtons />
        </div>
      </div>
        
  );
};

export default Navbar;