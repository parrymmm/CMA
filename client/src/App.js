import "./App.css";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Partials/Header";
import NotFound from "./Components/Auth/NotFound";
import Login from "./Components/Auth/Login/Login";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
