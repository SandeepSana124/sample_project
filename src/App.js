import './App.css';
// import "./Assests/Home.css"
import {Route, Routes} from "react-router-dom"
// import Header from './Coponents/Header';
// import Home from './Coponents/Home';
// import Footer from './Coponents/Footer';

import Resources from './Coponents/Resources'



function App() {
  return (
    <div className="">
       {/* <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    
     
        <Footer/> */}

    <Resources/>
     
    </div>
  );
}

export default App;
