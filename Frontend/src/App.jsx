/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/ProtectedRoute";

const Landing = React.lazy(() => import("./Components/LandingPage"));
const Login = React.lazy(() => import("./Components/LoginComponent"));
const Register = React.lazy(() => import("./Components/RegisterComponent"));
const ContactUs = React.lazy(() => import("./Components/ContactUs"));
const TrekDetail = React.lazy(() => import("./Components/TrekDetail"));
const AdminDashboard = React.lazy(() => import("./Components/AdminDashboard"));
const AdminTrekManagement = React.lazy(() =>
  import("./Components/AdminTrekManagement")
);
const Treks = React.lazy(() => import("./Components/AllTrek"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/main"} />} />
        <Route path="/main" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trekDetail" element={<TrekDetail />} />
        <Route path="/trekList" element={<Treks />} />
        <Route path="/trek/:trekId" element={<TrekDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/trek" element={<AdminTrekManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
