import { register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initAuthState = {
  user: {
    email: '',
    userName: '',
  },
  isLoggedIn: false,
  isRefreshing: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, actions) => {
      console.log(actions);
    });
  },
});

export const authReducer = authSlice.reducer;
