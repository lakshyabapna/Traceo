import React from 'react'
import heroImage from '../../Assets/Hero.png'
import './Home.css'
import realtimeIcon from '../../Assets/realtimeIcon.png'
import accessIcon from '../../Assets/accessIcon.png'
import secureIcon from '../../Assets/secureIcon.png'
import {Link} from 'react-router-dom'
const Home = () => {  
    return (
        <div className='Home'>
            <section className='hero'>
                <div className='description'>
                    <h2>Track your Orders Instantly!</h2>
                    <p>Get real-time updates on your orders from dispatch to doorstep.</p>
                    <Link to="/dashboard">
                        <button className='button'>Start Tracking</button>
                    </Link>
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
        </div>
    )
}

export default Home
