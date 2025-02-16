import React, { Suspense } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = React.lazy(() => import("./Components/LandingPage"));
const ReviewCard = React.lazy(() => import("./Components/ReviewCard"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} />} />
          <Route path="/main" element={<Landing />} />
          <Route path="/card" element={<ReviewCard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
