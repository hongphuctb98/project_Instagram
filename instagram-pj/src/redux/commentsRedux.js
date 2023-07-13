import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getComments, createComment as createCommentApi } from "../api";

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (post) => {
    const res = await createCommentApi(post);
    return res.data;
  }
);

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const res = await getComments();
    return res.data;
  }
);

const postRedux = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments.unshift(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPost } = postRedux.actions;
export default postRedux.reducer;
