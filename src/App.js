import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:restaurantId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
