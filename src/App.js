import './App.css';


import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Hell from './Coponents/Hell';
import Home from './Coponents/Home';
import Chai from './Coponents/Chai';
import "./Assests/ResourcesImages/Resources.scss"



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
<Chai/>

     

    
    
     
    </div>
  );
}

export default App;
