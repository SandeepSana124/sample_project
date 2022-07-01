import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navhead() {
  return (
    <div className='contain'>

      <nav className="navbar navbar-expand-lg nav001">
        <div className="container-fluid">
          <img src={require('file:///C:/Users/Manoj.Gundeti/Desktop/group-3@3x.png')} alt='UFC Logo' className='img001' />
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul001" >
              <li className="nav-item " >
                <a className="nav-link active text-white " aria-current="page" href="#">Solutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white " aria-current="page" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">Our Approach</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">Support</a>
              </li>

            </ul>
            <div className="d-flex flex001">
              <a className="nav-link active text-white text-uppercase" style={{fontSize:'11px',fontWeight:'500'}} aria-current="page" href="#">sign in</a>
              <button className="button001" type="submit">START DEMO</button>
            </div>
          </div>
        </div>
      </nav>
      <div className='h-tag001 text-white'>
        <h1>Reduce Your AWS Bills by up to <span style={{color:'#ffcd46'}}className='span001 '>80% While</span><br></br> Gaining the Most Out of Your Cloud!</h1>
      </div>
      <div className='p-tag001'>
      <p>SpotWorks enables you to run Spot instances without needing to worry about AWS taking them <br></br>
      away with a 2 minute notice. Our predictive algorithms and failover tech ensures that your service <br></br>
      migrates gracefully with no impact on end-users. And we do this by saving you an insane amount!</p>
      </div>
      <div className='start-demo'>
        <span style={{padding:'9px 55px 7px 56px'}}className="border border-light">START A DEMO</span>
      </div>
    </div>
  )
}

export default Navhead




