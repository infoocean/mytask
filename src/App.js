import "./App.css";
import Login from "./Mycomponents/Login";
import Register from "./Mycomponents/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/registrationpage" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
