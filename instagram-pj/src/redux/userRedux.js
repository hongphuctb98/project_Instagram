import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUser as createUserApi,
  getUsers,
  getUser,
  updateUser as updateUserApi,
} from "../api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await getUsers();

  return res.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const res = await getUser(id);
  return res.data;
});
export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const res = await createUserApi(user);
  return res.data;
});

export const updateUser = createAsyncThunk(
  "users/uploadUser",
  async (payload) => {
    const res = await updateUserApi(payload.uploadId, payload.updatedUser);
    return res.data;
  }
);
const userRedux = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    users: [],
    error: null,
    status: "idle",
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      return state;
    },

    setUser: (state, action) => {
      state.currentUser = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
        state.users = state.users.map((user) => {
          return user.id === action.payload.uploadId
            ? action.payload.user
            : user;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addUser, setUserLogin } = userRedux.actions;
export default userRedux.reducer;
