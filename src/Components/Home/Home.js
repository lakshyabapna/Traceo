import React, { useEffect } from 'react'
import heroImage from '../../Assets/Hero.png'
import { Link } from 'react-router-dom'
import './Home.css'
import realtimeIcon from '../../Assets/realtimeIcon.png'
import accessIcon from '../../Assets/accessIcon.png'
import secureIcon from '../../Assets/secureIcon.png'
const Home = () => {
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
        <div className='Home'>
            <header className='navbar'>
                <div className='logo'>
                    Traceo
                </div>
                <nav className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/contact' className='contact'>Contact</Link>
                    <Link to='/faq'className='faq'>FAQ</Link>
                    <Link to='/login' className='login'>Login</Link>
                    <Link to='/profile'>Profile</Link>
                </nav>
            </header>
            <section className='hero'>
                <div className='description'>
                    <h2>Track your Orders Instantly!</h2>
                    <p>Get real-time updates on your orders from dispatch to doorstep.</p>
                    <button className='button'>Start Tracking</button>
                </div>
                <div className='hero-image'>
                    <img src={heroImage} alt='Workplace with Traceo interface' />
                </div>
            </section>
            <section className='hero-features'>
                <div className='card'>
                    <img src={realtimeIcon} alt="Real Time Icon" className="icons" />
                    <h3>Real-Time Updates</h3>
                    <p>Receive notifications about your order status as soon as they change.</p>
                </div>
                <div className='card'>
                    <img src={accessIcon} alt="Easy Access Icon" className="icons" />
                    <h3>Easy Access</h3>
                    <p>Quickly check the progress of your order with a few simple clicks.</p>
                </div>
                <div className='card'>
                    <img src={secureIcon} alt="Secure Icon" className="icons" />
                    <h3>Secure & Reliable</h3>
                    <p>Log in safely and access your order history whenever you need it.</p>
                </div>
            </section>
            <section className="feedback">
                <h2 className="feedback-title">What Our Users Say</h2>
                <div className="feedback-cards">
                    <div className="feedback-card">
                        <img src="https://i.pravatar.cc/100?img=32" alt="Aditi" className="feedback-avatar" />
                        <p>"Traceo made tracking my orders effortless and reliable. Great experience!"</p>
                        <span>- Aditi Sharma</span>
                    </div>
                    <div className="feedback-card">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Rohan" className="feedback-avatar" />
                        <p>"I love how easy it is to get updates. Clean interface and super fast."</p>
                        <span>- Rohan Verma</span>
                    </div>
                    <div className="feedback-card">
                        <img src="https://i.pravatar.cc/100?img=45" alt="Priya" className="feedback-avatar" />
                        <p>"Secure, simple, and accurate. This is how order tracking should be."</p>
                        <span>- Priya Mehta</span>
                    </div>
                </div>
            </section>

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
                            <a href="https://www.linkedin.com/in/lakshya-bapna-73bb50323/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/lakshyabapna" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
                            </a>
                            <a href="https://instagram.com/lakshyabapna" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-right">
                        <h4>About Traceo</h4>
                        <p>We provide real-time tracking and updates for your orders, helping you stay informed every step of the way.</p>
                        <p>&copy; 2025 Traceo. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home
