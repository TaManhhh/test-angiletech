import { Post } from "../Service/service";

const refreshAccessToken = async (refreshToken) => {
  const data = {
    refreshToken: refreshToken,
  };
  const obj = {
    url: "https://test-react.agiletech.vn/auth/refreshToken",
    body: data,
  };
  try {
    const res = await Post(obj);
    if (res.status === true) {
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

export default refreshAccessToken;
