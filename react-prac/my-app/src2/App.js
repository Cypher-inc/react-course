import { Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import NavComp from "./comp/Navbar";
import Products from "./comp/Products";
import Welcome from "./comp/Welcome";

function App() {
  return (
    <div>
      <NavComp></NavComp>
      <Routes>
        <Route path = '/' element={<Home></Home>}></Route>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
