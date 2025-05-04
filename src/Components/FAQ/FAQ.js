import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'
import faqImage from '../../Assets/FAQimage.png'
const faqs = [
  {
    question : 'How do I track my order?',
    answer : 'Simply login and just go on dashboard to check your orders.'
  },
  {
    question : 'Do I need an account to track my order?',
    answer : 'Yes, you need to sign in to access your dashboard.'
  },
  {
    question : 'How often is order status updated?',
    answer : 'We update status instantly as we recieve new data from our delivery partners.'
  },
  {
    question : 'What if I forget my login credentials?',
    answer : 'You can reset your login with your registered email.'
  }
]
const FAQ = () => {
  const [answer,setAnswer] = useState(null)
  const handleToggle = (i) => {
    setAnswer(answer === i ? null : i);
  }
  return (
    <div className='faq'>
      <div className='faq-left'>
        <h2>Got Questions?</h2>
        <p className='description'>No worries—we are here to answer your questions!</p>
        <div className='data'>
          {faqs.map((f,i)=>(
            <div key={i} className='item'>
              <div className='question' onClick={()=>handleToggle(i)}>
                <span>{f.question}</span>
                <span className='faq-toggle'>{answer===i?'-':'+'}</span>
              </div>
              {answer === i && (
                <div className='faq-answer'>
                    {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='faq-mid'>
          <p>Still need help? <Link to='/contact'>Contact us</Link></p>
        </div>
      </div>
      <div className='faq-right'>
          <img src={faqImage} alt = 'FAQ ILLUSTRATION' />
      </div>
    </div>
  )
}

export default FAQ
