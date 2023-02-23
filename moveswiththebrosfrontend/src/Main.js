import "./App.css";
import { Routes, Route } from "react-router-dom";
import Activities from "./components/Activites/Activities";

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default Main;
