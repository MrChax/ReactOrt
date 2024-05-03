import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import BeerPage from "./components/Beer/BeerPage";
import BeersDetails from "./components/Beer/BeersDetails";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeerPage />} />
        <Route path="/beers/:name" element={<BeersDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
