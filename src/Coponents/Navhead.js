// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Navhead() {
//   return (
//     <div className='nav001'>

//       <nav className="navbar navbar-expand-lg d-flex justify-content-between">
//         <div className="container-fluid nav-bg">
//           <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group.png')} alt='UFC Logo' className='img001' />
//           <a className="navbar-brand" href="#"></a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul001" >
//               <li className="nav-item " >
//                 <a className="nav-link active text-white " aria-current="page" href="#">Solutions</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white " aria-current="page" href="#">Resources</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white  " aria-current="page" href="#">Our Approach</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white  " aria-current="page" href="#">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white  " aria-current="page" href="#">Pricing</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white  " aria-current="page" href="#">Support</a>
//               </li>

//             </ul>
//             <div className="d-flex flex001">
//               <a className="nav-link active text-white text-uppercase" style={{fontSize:'11px',fontWeight:'500'}} aria-current="page" href="#">sign in</a>
//               <button className="button001" type="submit">START DEMO</button>
//             </div>
//           </div>
//         </div>
//       </nav>
     
//     </div>
//   )
// }

// export default Navhead








import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Navhead() {
  const navigate= useNavigate()

  const chooseprovider=()=>{
    navigate("/choose")

  }
  const signin=()=>{
    navigate("/signin")
  }
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-lite nav001">
        <div className="nav-bg container-fluid">
          <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group.png')} alt='UFC Logo' className='img001' />
          <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto navbar-ul001 p-5" >
              <li className="nav-item  " >
                <a className="nav-link active text-white " aria-current="page" href="#">Solutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white " aria-current="page" href="/">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">Our Approach</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  text-white " aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white   " aria-current="page" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white  " aria-current="page" href="#">Support</a>
              </li>

            </ul>
            <div className="d-flex flex001">
              <a className="nav-link  text-uppercase" style={{fontSize:'11px',color:'white',fontWeight:'500'}} aria-current="page" href="#" onClick={signin}>Log In</a>
              <button className="button001" type="submit" onClick={chooseprovider}>START DEMO</button>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
  )
}

export default Navhead



