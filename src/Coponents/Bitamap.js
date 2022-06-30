import 'bootstrap/dist/css/bootstrap.min.css';
import './bitmap.scss'

function Bitamap() {
  return (

    <div className='firstdiv'>
      <div className='main'>
        {/* <div className='container'> */}
          {/* <div className='row'> */}
            {/* <div className='col-12 col-md-6 col-sm-12 order-md-1 order-sm-1'> */}

              {/* <div className='col-12 col-md-6 order-md-1'> */}
              <img src={require("file:///home/prashanthdadi/.cache/.fr-gLsnhX/bitmap-copy.png")} alt="UFC logo" style={{ width: "100%" }} />
            {/* </div> */}
            </div>
            {/* <div className='col-12 col-md-6 order-md-2 innerdiv'> */}
            <div>
              <div id="s">
                {/* <div className='col-12 col-md-6 col-sm-12 order-md-2 order-sm-2' style={{ alignItems: "center", textAlign: "center" }}> */}
                  <div className='img1'>
                    <img src={require("file:///home/prashanthdadi/.cache/.fr-1ESTdZ/group-2.png")} alt="UFC logo" />

                  </div>
                  <div><h1>CHECK YOUR INBOX</h1></div>

                  <div id="para">
                    <p>We've sdent you a verfication email to</p>
                    <h4 className='emailDiv'>Jhon.Doe@gmail.com</h4>
                    <p>In this email, you'll find instrucations to complete your<br />
                      <span>SpotWorks account registration</span></p>

                  </div>
                </div>
              </div>
            </div>

          // </div>

        // </div>
      // </div>


// </div>

      )
}

      export default Bitamap