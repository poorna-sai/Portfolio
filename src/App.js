
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Home from './Home';


import Contact from './Contact';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>  
          <Route path="/" element={<Home />} />
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
