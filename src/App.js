import logo from './logo.svg';
import './App.css';
import {Router,Route, Routes} from "react-router-dom"
import Header from './Coponents/Header';
import Home from './Coponents/Home';
import Footer from './Coponents/Footer';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route>
        <Header/>
      </Route>
      <Route>
        <Home/>
      </Route>
      <Route>
        <Footer/>
      </Route>


     </Routes>
    </div>
  );
}

export default App;
