import { BrowserRouter, Routes, Route } from "react-router-dom";  //import necessary components from package
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
