import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Home from './components/Home/Home.jsx'
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/countries" element={<Home/>} />
        <Route path="/countries/:idPais" element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
