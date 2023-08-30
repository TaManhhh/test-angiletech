import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { refreshAccessToken } from '../RefreshToken/RefreshToken';
export const refreshAccessTokenAsync = createAsyncThunk(
  "auth/refreshAccessToken",
  async (refreshToken, thunkAPI) => {
    try {
      const newAccessToken = await refreshAccessToken(refreshToken);
      return newAccessToken;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshAccessTokenAsync.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
});

export const { setTokens,clearTokens } = userSlice.actions;
export default userSlice.reducer;
