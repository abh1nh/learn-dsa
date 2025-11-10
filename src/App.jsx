import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home'
import ArraysPage from "./components/Arrays";


function App() {
  return (
  <BrowserRouter> 
    <div className="App">
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path="/arrays" element={<ArraysPage />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
