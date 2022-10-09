import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./config";

function AppRoutes() {
  return (
    <Router basename="/">
      <Routes>
        {Object.values(ROUTES).map((route, index) =>
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default memo(AppRoutes);
