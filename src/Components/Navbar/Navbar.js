import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <header className='navbar'>
      <div className='logo'>Traceo</div>
      <nav className='links'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/contact' className='contact'>Contact</Link>
        <Link to='/faq' className='faq'>FAQ</Link>
        <Link to='/login' className='login'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
    </header>
  );
};

export default Navbar;