import React,{useEffect} from 'react'
import heroImage from '../../Assets/Hero.png'
import './Home.css'
const Home = () => {
    useEffect(()=>{
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if(window.scrollY > 10){
                navbar.style.backgroundColor = '#ffffffcc';
            } else {
                navbar.style.backgroundColor = 'transparent'; 
            }
        };
        window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    },[])
  return (
    <div className='Home'>
        <header className='navbar'>
            <div className='logo'>
                Traceo
            </div>
            <nav className='links'>
                <p>Home</p>
                <p>Dashboard</p>
                <p className='contact'>Contact</p>
                <p className='faq'>FAQ</p>
                <p className='login'>Login</p>
                <p>Profile</p>
            </nav>
        </header>
        <section className='hero'>
            <div className='description'>
                <h2>Track your Orders Instantly!</h2>
                <p>Get real-time updates on your orders from dispatch to doorstep.</p>
                <button className='button'>Start Tracking</button>
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt='Workplace with Traceo interface'/>
            </div>
        </section>
        <section className='hero-features'>
            <div className='card'>
                <h3>Real-Time Updates</h3>
                <p>Receive notifications about your order status as soon as they change.</p>
            </div>
            <div className='card'>
                <h3>Easy Access</h3>
                <p>Quickly check the progress of your order with a few simple clicks.</p>
            </div>
            <div className='card'>
                <h3>Secure & Reliable</h3>
                <p>Log in safely and access your order history whenever you need it.</p>
            </div>
        </section>
        <footer className='footer'>
            <p>&copy; 2025 Traceo. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Home
