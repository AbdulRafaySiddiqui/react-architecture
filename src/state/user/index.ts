import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./types";
import { notifyDismiss, notifyLoading, notifySuccess } from "../../components/Notification";

const initialState: UserState = {
  loading: false,
  user: {
    name: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    //#region fetchWeatherForcast
    builder.addCase(saveUserProfileThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveUserProfileThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(saveUserProfileThunk.fulfilled, (state, action) => {
      state.loading = false;
    });
    //#endregion
  },
});

export const saveUserProfileThunk = createAsyncThunk("user/saveUserProfile", async (user: User, thunkApi) => {
  const loadingId = notifyLoading("Saving...");
  await setTimeout(() => {}, 2000);
  notifyDismiss(loadingId);
  notifySuccess("User saved!");
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
