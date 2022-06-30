import './App.css';
import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home from './Coponents/Home';
import Footer from './Coponents/Footer';
import Hell from './Coponents/Hell';


function App() {
  return (
    <div className="App">
      {/*  <Header/> */}
   {/*   <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes> */}
    
     <Hell/>
     
       {/*  <Footer/> */}
    
     
    </div>
  );
}

export default App;
