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
    builder.addCase(register.pending, (state, action) => {
      console.log(action);
    });
  },
});

export const authReducer = authSlice.reducer;
