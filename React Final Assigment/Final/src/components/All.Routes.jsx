import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Ticket from "../pages/Ticket";
import Login from "../pages/Login";
import TicketCreate from "../pages/TicketCreate";
import TicketView from "../pages/TicketView";
import TicketEdit from "../pages/TicketEdit";
import PrivateRoute from "./PrivateRoute";

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
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/ticket/create"
          element={
            <PrivateRoute>
              <TicketCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket/view/:id"
          element={
            <PrivateRoute>
              <TicketView />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket/edit/:id"
          element={
            <PrivateRoute>
              <TicketEdit />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
