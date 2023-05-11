import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAuth {
  accessToke: string | null;
}

const initialState: IAuth = {
  accessToke: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccesToken: (state, action: PayloadAction<string | null>) => {
      state.accessToke = action.payload;
    },
  },
});

export const { setAccesToken } = authSlice.actions;

export default authSlice.reducer;
