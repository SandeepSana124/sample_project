import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './hell.scss'

function Hell() {
  return (
    <div>
      <div className='contain'>
        <div className="heading">
          {/* <div class="server-room-purple-uhd-4k-wallpaper"> */}
          {/* <img src={require('file:///home/chaitanyaboddu/.cache/.fr-FMSbB6/server-room-purple-uhd-4-k-wallpaper.png')} alt='UFC Logo' className='' /> */}
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#"> */}
              <div>
                <img src={require("/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/footer1.png")} alt='UFC Logo' className='spotwork' />
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">SOLUTIONS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">RESOURCES</a>
                  </li>
                  <li className="nav-item dropdown">
                    {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                    <a className="nav-link" href="#">OUR APPROACH</a>
                    {/* </a> */}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            {/* <li><a className="dropdown-divider"></li> */}
                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    {/* </ul>  */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">ABOUT US</a>
                  </li>
                  {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">PRICING</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">SUPPORT</a>
                  </li>


                </ul>
                {/* <form className="d-flex"> */}
                <div className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">LOG IN</a>
                    </li>
                  </ul>
                  {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                  {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                  <button className="btn-primary">START DEMO</button>
                  {/* </form> */}
                </div>
              </div>

            </div>
          </nav>
        </div>
        <div className='reduce'>
          <h1>REDUCE YOUR AWS BILLS BY UP TO <span style={{ color: "#ffcd46" }}>80% WHILE</span><br />GAINING THE MOST OUT OF YOUR CLOUD!</h1>
          <p className='spotwork'>SpotWorks enables you to run Spot instances without needing to worry about AWS taking them<br /> away with a 2 minute notice. Our predictive algorithms and failover tech ensures that your service<br /> migrates gracefully with no impact on end-users. And we do this by saving you an insane amount!
          </p>
          <button className='btn1' >START A DEMO</button>
          {/* <img src={require('./assets/images/footer/nfl-logo.pn')} alt='UFC Logo' className='' /> */}

        </div>

        </div>
      </div>

   
     
      );
}

      export default Hell;
