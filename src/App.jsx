import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>RouteXplorer</header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/1001" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <footer>React Router - RouteXplorer</footer>
    </div>
  );
}

export default App;
