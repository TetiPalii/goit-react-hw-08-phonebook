import {
  logIn,
  logout,
  refreshUser,
  register,
} from 'redux/auth/authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleAuthFulfilled = (state, action) => {
  const { user, token } = action.payload;

  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.refreshingUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
