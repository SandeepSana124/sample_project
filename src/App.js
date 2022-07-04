import './App.css';
import "./Assests/Home1.css"
import "./Assests/Home.css" 
import "./Assests/Navhead.css"
import "./Assests/ResourcesImages/Resources.scss"
import "./Assests/Details.css"
import "./Assests/chai.scss"



import {Route, Routes} from "react-router-dom"
import Home from './Coponents/Home';
import Resources from './Coponents/Resources'
import DetailsPage from './Coponents/DetailsPages/DetailsPage';
import Navhead from "./Coponents/Navhead";
import DetailsPage1 from "./Coponents/DetailsPages/DetailsPage1";
import ChooseProvider from "./Coponents/ChooseProvider";
import SetupManual from "./Coponents/SetupManual";
import SignIn from "./Coponents/SignIn";
import Bitamap from "./Coponents/Bitmap";
import Signup from "./Coponents/Signup";
import Spot from "./Coponents/Spot";
import Footer from "./Coponents/Footer"
import Dashboard from "./Coponents/Dashboard"




function App() {
  return (

    <div className="">
     <Navhead/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/resorces" element={<Resources/>}></Route>
     <Route path="/panini" element={<DetailsPage/>}></Route>
     <Route path="/mannhumel" element={<DetailsPage1/>}></Route>
     <Route path="/choose" element={<ChooseProvider/>}></Route>
     <Route path="/amazon" element={<SetupManual/>}></Route>
     <Route path="/signin" element={<SignIn/>}></Route>
     <Route path="/bitmap" element={<Bitamap/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/spot" element={<Spot/>}></Route>
     <Route path="/dashboard" element={<Dashboard/>}></Route>


     </Routes>
<Footer/>

    </div>
  );
}

export default App;
