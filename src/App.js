import './App.css';
import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home1 from './Coponents/Home1';
import Footer from './Coponents/Footer';
import Hell from './Coponents/Hell';
import Home from './Coponents/Home';
import Chai from './Coponents/Chai';






function App() {
  return (
    <div className="App">

  
     <Hell/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>


     </Routes>
     <Home1/>
<Chai/>
     
    
     
    </div>
  );
}

export default App;
