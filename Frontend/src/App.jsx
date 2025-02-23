/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import "./App.css";
import mountain_loading from "./assets/images/mountain-loading_gif.gif";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = React.lazy(() => import("./Components/LandingPage"));
const Login = React.lazy(() => import("./Components/LoginComponent"));
const Register = React.lazy(() => import("./Components/RegisterComponent"));
const ContactUs = React.lazy(() => import("./Components/ContactUs"));
const TrekDetail = React.lazy(() => import("./Components/TrekDetail"));
const AddTrek = React.lazy(() => import("./Components/AddTrek"));
const AdminDashboard = React.lazy(() => import("./Components/AdminDashboard"));
const AdminTrekManagement = React.lazy(() =>
  import("./Components/AdminTrekManagement")
);
const Sidebar = React.lazy(() => import("./utility/Sidebar"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <img
              src={mountain_loading}
              alt="Loading"
              style={{ margin: "20vh auto", height: "30em" }}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} />} />
          <Route path="/main" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/trekdetail" element={<TrekDetail />} />
          <Route path="/addtrek" element={<AddTrek />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/admin/trek" element={<AdminTrekManagement />} />
        </Routes>
      </Suspense>
    </Router>
    // <TrekManagement />
    // <AdminDashboard />
  );
}

export default App;
