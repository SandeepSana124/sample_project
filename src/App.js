import './App.css';
import "./Assests/Home1.css"
import "./Assests/Home.css"


import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home1 from './Coponents/Home1';
import Footer from './Coponents/Footer';
import Home from './Coponents/Home';






function App() {
  return (
    <div className="">
       <Header/>
       <Home/>
     <Routes>
      <Route path="/" element={<Home1/>}></Route>
     </Routes>
    
     
        <Footer/>
    
     
    </div>
  );
}

export default App;
