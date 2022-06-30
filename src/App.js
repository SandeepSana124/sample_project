import './App.css';


import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Home1 from './Coponents/Home1';
import Hell from './Coponents/Hell';
import Home from './Coponents/Home';
import Chai from './Coponents/Chai';



import Resources from './Coponents/Resources'
import DetailsPage from './Coponents/DetailsPage';



function App() {
  return (
    <div className="App">

  
     <Hell/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/resorces" element={<Resources/>}></Route>
     <Route path="/panini" element={<DetailsPage/>}></Route>




     </Routes>
     {/* <Home1/> */}
<Chai/>

     

    
    
     
    </div>
  );
}

export default App;
