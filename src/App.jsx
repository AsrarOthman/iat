import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import App2 from "./App2";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="motherx">
      <div className="mother1x">
        <div className="main2x">
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Navigate to={isLoggedIn ? "/main" : "/login"} />}
              />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route
                path="/main"
                element={isLoggedIn ? <App2 /> : <Navigate to="/login" />}
              />
            </Routes>
          </Router>
          {/* <Login /> */}
          {/* <App2 /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
