import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Contact,
  Admin,
  ProductList,
  ProductDetail,
  PageNotFound,
} from "../pages/index";

export const AllRoutes = () => {
  const user = true;

  return (
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
  );
};
