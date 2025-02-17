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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
