import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInWithPassword } from "../../services/apiAuth";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async function ({ email, password }) {
    const { data, error } = await logInWithPassword({ email, password });
    // data = user:{}, session:{}
    return { data, error };
  }
);

export const logOut = createAsyncThunk("auth/logOut", async function () {
  const { error } = await logOut();

  return { error };
});

const initialState = {
  isLoggedIn: false,
  status: "idle",
  user: null,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.status == "error";
        state.error == action.error.message;
      }),
});

export const user = (state) => state.auth.user;
export const error = (state) => state.auth.error;

export const { setUser, clearUser, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
