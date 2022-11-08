import "./App.css";
import Login from "./Mycomponents/Login";
import Register from "./Mycomponents/Register";
import { Routes, Route } from "react-router-dom";
import Number from "./test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/registrationpage" element={<Register />} />
        <Route path="/number" element={<Number />} />
      </Routes>
    </div>
  );
}

export default App;
