import './App.css';
import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home1 from './Coponents/Home1';
import Footer from './Coponents/Footer';
<<<<<<< HEAD
import Hell from './Coponents/Hell';
=======
import Home from './Coponents/Home';




>>>>>>> a499a097593c6636e2944dc4194e8a1b7b2daa78


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      {/*  <Header/> */}
   {/*   <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes> */}
    
     <Hell/>
=======
    <div className="">
       <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Home1/>

>>>>>>> a499a097593c6636e2944dc4194e8a1b7b2daa78
     
       {/*  <Footer/> */}
    
     
    </div>
  );
}

export default App;
