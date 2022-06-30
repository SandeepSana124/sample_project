import './App.css';

// import "./Assests/Home.css"
import {Route, Routes} from "react-router-dom"
// import Header from './Coponents/Header';
// import Home from './Coponents/Home';
// import Footer from './Coponents/Footer';
import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home1 from './Coponents/Home1';
import Footer from './Coponents/Footer';
import Hell from './Coponents/Hell';
import Home from './Coponents/Home';



import Resources from './Coponents/Resources'



function App() {
  return (
    <div className="">
       {/* <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Home1/>

     
        <Footer/> */}

    <Resources/>
       {/*  <Footer/> */}
    
     
    </div>
  );
}

export default App;
