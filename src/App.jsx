import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";
import { PageNotFound } from "./components/PageNotFound";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
