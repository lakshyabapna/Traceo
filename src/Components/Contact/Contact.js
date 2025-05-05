import React,{useState} from 'react'
import './Contact.css'
import ContactImage from '../../Assets/Contact.png'
const Contact = () => {
  const [status,setStatus] = useState('idle')
  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus('sending')
    const formData = new FormData(e.target);
    formData.append('access_key','d7450a6a-8888-4a30-8ce0-abb9d2807173');
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    if(response.ok){
      setStatus('success');
      e.target.reset()
    } else {
      setStatus('error')
    }
  }
  return (
    <div className='contact'>
      <div className='contact-left'>
          <h2>Contact Us</h2>
          <p>Have any questions or feedback? Fill out the form and we'll get back to you shortly.</p>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              Name
              <input type='text' name='name' placeholder='Your name' required></input>
            </label>
            <label>
              Email
              <input type='email' name='email' placeholder='Your email' required></input>
            </label>
            <label>
              Message
              <textarea name='message' placeholder='Your message' required></textarea>
            </label>
            <button type='submit' disabled={status==='sending'}>
              {status === 'sending'?'Sending...':'Send Message'}
            </button>
            {status==='success' && <p className='form-success'>Message sent successfully!</p>}
            {status==='error' && <p className='form-error'>Something went wrong. Please try again. </p>}
          </form>
      </div>
      <div className='contact-right'>
        <img src={ContactImage} alt='Contact Illustration' />
      </div>
    </div>
  )
}

export default Contact
