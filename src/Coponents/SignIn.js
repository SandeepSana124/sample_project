import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
function SignIn() {

    const navigate=useNavigate()

        const bitmap=()=>{
            navigate("/bitmap")
    
        }
        const signup=()=>{
            navigate("/signup")
    
        }
    return (
        <div>

            <div className=" MainSign mt-5 mb-5">
                <div className="row signFile">
                    <div className="col-md-6 px-0 sign0111" >
                    </div>
                    <div className="col-md-6 px-0 sign0112">
                        
                        <h1 className='htag0111'>SIGN IN</h1>
                        <p className='ptag0111'>Sign In on the internal platform</p>
                       
                        <div class="mb-3 span0113" >
                            <caption className='span0112 label '>Email Address</caption>
                           
                            <input type="email" className="form-control john0111 john011" id="exampleFormControlInput1" placeholder="John.Doe@gmail.com" />
                            
                        </div>
                        <div class="col-auto">
                            <input type="password" class="form-control john0111 john0112" id="inputPassword2" placeholder="Password" />
                        </div>
                        <p style={{paddingLeft:'14rem', margin:'15px 0px', fontSize:'15px',textDecoration:' underline'}} >Forgot Password?</p>
                        <button  onClick={bitmap} type="button" class="btn btn-primary active btsign0111 " data-bs-toggle="button" autocomplete="off" aria-pressed="true">SIGN IN</button>
                        <p onClick={signup} style={{margin:'15px 0px', fontSize:'16px',fontWeight:'500' }}>Don’t have an account ? <span style={{color:'#124f9d'}}>SIGN UP</span></p>
                        <div class="form-group input-group ">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn





