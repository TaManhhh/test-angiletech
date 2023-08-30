import axios from "axios";
import { Post } from "../Service/service";
import { refreshAccessTokenAsync, setTokens } from "../redux/userSlice";

export async function refreshAccessToken(refreshToken, dispatch) {
  const data = {
    refreshToken: refreshToken,
  };
  const obj = {
    url: "https://test-react.agiletech.vn/auth/refreshToken",
    body: data,
  };
  try {
    const res = await Post(obj);
    if (res.accessToken) {
      const newAccessToken = res.accessToken;
      return newAccessToken;
    } else {
      console.log("Refresh token failed");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
export async function handleTokenRefresh(refreshToken, dispatch) {
  try {
    const newAccessToken = await refreshAccessToken(refreshToken, dispatch);
    if (newAccessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      dispatch(setTokens({ accessToken: newAccessToken, refreshToken }));
    } else {
      console.log("Failed to refresh token");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
