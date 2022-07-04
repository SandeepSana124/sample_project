import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.scss'

function Signup() {
const navigate=useNavigate()
    const signin=()=>{
        navigate("/signin")
    }

    const spot=()=>{
        navigate("/spot")
    }
  return (
    <div className='container d-flex justify-content-between mt-5 mb-5'>
      
      <div>
      <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/bitmap-copy.png')} alt='UFC Logo' className='panini-image'/>         
      </div>
      <div className='d-flex flex-column justify-content-center '>
      <h1>SIGN UP</h1>
                <p>Sign up on the internal platform</p>
                <div className='d-flex flex-column input'>
                <div>
                    <input type="text" placeholder="First Name*"  className='m-2 p-2 input'/>
                    <input type='text' placeholder="Last Name*" className='m-2 p-2 '/>
                </div>
                <input type='email' placeholder="Email ID"  className='m-2 p-2'/>
                <div>
                    <input type='number' placeholder="+91" className='p-2 m-2 mobileinput'/>  
                    <input type='number' placeholder="Phone No*" className='p-2 m-2 mobilecodeinput'/>
                </div>
                
                <input type='text' placeholder="Organization name*" className='m-2 p-2'/>
                <input type='password' placeholder="Password*" className='m-2 p-2'/>
                <input type='password' placeholder="Confirm Password*" className='m-2 p-2'/>
                <img src='https://www.gannett-cdn.com/-mm-/1b931c3f7ff081a68b69cb4d7361f3b03272be39/c/u003d0-0-371-210/local/-/media/USATODAY/USATODAY/2014/12/03/635531655682537096-Screen-Shot-2014-12-02-at-10.08.55-PM.jpg' className='capta-image' alt='captcha'/>
                
               <button type='submit' className='signup-btn'onClick={spot} >SIGN UP</button>
               <p className='pt-3' onClick={signin}>Already have an account ? <span className='spanEle'>SIGN IN</span></p>
                </div>
      </div>
    </div>
  )
}

export default Signup