import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div className="App">
      <div> <Home/> </div>
    </div>
  );
}

export default App;
