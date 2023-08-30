import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import SignIn from "./Page/SignIn";
import Profile from "./Page/Profile/Profile";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { handleTokenRefresh } from './RefreshToken/RefreshToken';
function App() {
  // const dispatch = useDispatch();
  // const { accessToken, refreshToken } = useSelector((state) => state.auth);
  // const accessTokenExpireTime = new Date(accessToken?.exp * 1000);
  // const currentTime = new Date();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentTime > accessTokenExpireTime) {
  //       handleTokenRefresh(refreshToken, dispatch);
  //     }
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, [accessTokenExpireTime, refreshToken, dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
