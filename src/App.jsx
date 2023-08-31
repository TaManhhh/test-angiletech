import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import SignIn from "./Page/SignIn";
import Profile from "./Page/Profile/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={(
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )} />
        <Route path="*" element={<p>Nothing here : 404 !</p>} />
      </Routes>
    </>
  );
}

export default App;
