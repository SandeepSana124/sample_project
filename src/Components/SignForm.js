import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function SignForm() {
  return (
    <div>
      <div className='container-fluid'>
                <div className='row '>
                    <div className='col-12 col-md-6 order-md-1 sign-img'>
                        <img src={require("file:///C:/Users/Manoj.Gundeti/Desktop/zeplin%20images/bitmap-copy@3x.png")} className="img1" />

                    </div>
                    <div className='col-12 col-md-6 order-md-2 sign-content'>
                    <h4 style={{textAlign:"initial", color:"#050910", fontSize:"48px"}}>SIGN UP</h4>
                        <p style={{textAlign:"initial",color:"#050910"}}>Sign up on the internal platform</p>
                    </div>
                    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

                </div>  

            </div>
    </div>
  )
}

export default SignForm
