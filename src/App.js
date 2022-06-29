import './App.css';
// import "./Coponents/Details.css"
import {Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home from './Coponents/Home';
import Footer from './Coponents/Footer';

import DetailsPage from './Coponents/DetailsPage';


function App() {
  return (
    <div className="App">
       {/* <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes> */}
      <DetailsPage/>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
