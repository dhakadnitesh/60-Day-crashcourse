import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductsDetails from "../pages/ProductsDetails";
import Login from "../pages/Login";
import CardPage from "../pages/card";


import PrivateRoute from "./PrivateRoutes";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Products/Details/:id"
          element={
            <PrivateRoute>
              <ProductsDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/Card/Page/:id"
          element={
            <PrivateRoute>
              <CardPage/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
