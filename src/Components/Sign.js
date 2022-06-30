import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Sign() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-12 col-md-6 order-md-1 sign-img'>
                        <img src={require("file:///C:/Users/Manoj.Gundeti/Desktop/zeplin%20images/bitmap-copy@3x.png")} className="img1" />

                    </div>
                    <div className='col-12 col-md-6 order-md-2 sign-content'>
                        <h4 style={{textAlign:"initial", color:"#050910", fontSize:"48px"}}>SIGN IN</h4>
                        <p style={{textAlign:"initial",color:"#050910"}}>Sign In on the internal platform</p>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">John.Doe@gmail.com</label>
                        </div>
                        <div className="form-floating">
                            <input  type="password" className="form-control" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className='Forgot'>
                            <p style={{textAlign:"end"}}>Forgot Password?</p>
                        </div>
                        <button style={{width:'360px'}} type="button" className="btn btn-primary btn-lg">SIGN IN</button>
                        <div style={{fontSize:'14px',textAlign:'center'}}className="Dont-have-an-accoun">
                            Don’t have an account ?<span style={{color:'blue'}}class="text-style-1">SIGN UP</span>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Sign
