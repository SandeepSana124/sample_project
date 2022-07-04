import 'bootstrap/dist/css/bootstrap.min.css';
import './Bitmap.scss'

function Bitamap() {
  return (

    <div className='firstdiv mb-5'>
      <div className='main'>
      
              <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/bitmap-copy.png")} alt="UFC logo" style={{ width: "100%" }} />
            
            </div>
            <div>
              <div id="s">
                  <div className='img1'>
                    <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group-2.png")} alt="UFC logo" />

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

         

      )
}

      export default Bitamap