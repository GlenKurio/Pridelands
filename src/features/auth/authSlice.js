import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, logInWithPassword } from "../../services/apiAuth";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async function ({ email, password }) {
    const { data, error } = await logInWithPassword({ email, password });
    // data = user:{}, session:{}
    return {
      data,
      error,
      isAuthenticated: data.user?.role === "authenticated",
    };
  }
);

export const logOut = createAsyncThunk("auth/logOut", async function () {
  const { error } = await logOut();

  return { error };
});
export const getCurUser = createAsyncThunk(
  "auth/getCurrUser",
  async function () {
    const { error } = await getCurrentUser();

    return { error, isAuthenticated: user?.role === "authenticated" };
  }
);

const initialState = {
  isAuthenticated: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.status = "idle";
        console.log(state.user, state.isAuthenticated);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = null;
        state.status == "error";
        state.error == action.error.message;
      });
    builder
      .addCase(logOut.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = null;
        state.status = "idle";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.payload.data.user;
        state.status == "error";
        state.error == action.error.message;
      });
    builder
      .addCase(getCurUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurUser.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.user;
        state.status = "idle";
      })
      .addCase(getCurUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user;
        state.status == "error";
        state.error == action.error.message;
      });
  },
});

export const user = (state) => state.auth.user;
export const error = (state) => state.auth.error;
export const isAuthenticated = (state) => state.auth.isAuthenticated;

export const { setUser, clearUser, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
