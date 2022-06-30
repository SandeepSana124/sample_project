/* import './App.css';
import "./Assests/Home.css" */
import {Route, Routes} from "react-router-dom"
/* import Header from './Coponents/Header';
import Home from './Coponents/Home';
import Footer from './Coponents/Footer'; */
import Hello from "./Coponents/Hello";

import ChooseProvide from './Coponents/ChooseProvider'
import Setupmanual from './Coponents/SetupManual'


function App() {
  return (
    <div className="">
      {/*  <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    
     
        <Footer/> */}
    <Hello/>
     <ChooseProvide/> 
  {/*   <Setupmanual/> */}
     
    </div>
  );
}

export default App;
