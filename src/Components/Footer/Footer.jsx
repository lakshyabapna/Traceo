import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-center">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/lakshya-bapna-73bb50323/" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/lakshyabapna" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://instagram.com/lakshyabapna" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h4>About Traceo</h4>
          <p>We provide real-time tracking and updates for your orders.</p>
          <p>&copy; 2025 Traceo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;