import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
 reducers: { // we will have login action and logout action
    login: (state, action) => {
     state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors, they allow us to pull out information
export const selectUser = (state) => state.user;

export default userSlice.reducer;
