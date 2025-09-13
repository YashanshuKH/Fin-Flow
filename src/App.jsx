import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Landing";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/dashboard";
import Insurance from "./components/Insurance/Insurance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      

      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/insurance" element={<Insurance />} />
    </Routes>
  );
}

export default App;
