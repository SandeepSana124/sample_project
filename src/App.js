import logo from './logo.svg';
import './App.css';
import {Router,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router>
     <Route>
        <Header/>
      </Route>
      <Route>
        <Home/>
      </Route>
      <Route>
        <Footer/>
      </Route>


     </Router>
    </div>
  );
}

export default App;
