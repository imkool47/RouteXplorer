import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components/index";

import {
  Home,
  Contact,
  Admin,
  ProductList,
  ProductDetail,
  PageNotFound,
} from "./pages/index";

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
