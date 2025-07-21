import React, { useEffect, useState } from 'react';
import logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import AuthButtons from '../authbutton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <div className='navbar'>
        <Link className='logo' to={'/'}>
          <img src={logo} alt='Logo Illustration' className='img'/>
        </Link>

        <div className='hamburger' onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </div>

        <nav className={`links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to='/' onClick={closeMenu}>Home</Link>
          <Link to='/dashboard' onClick={closeMenu}>Dashboard</Link>
          <Link to='/contact' className='contact' onClick={closeMenu}>Contact</Link>
          <Link to='/faq' className='faq' onClick={closeMenu}>FAQ</Link>
          <div className='mobile-auth'>
            <AuthButtons />
          </div>
        </nav>

        <div className='desktop-auth'>
          <AuthButtons />
        </div>

        {isMenuOpen && <div className='overlay' onClick={closeMenu}></div>}
      </div>

  );
};

export default Navbar;