import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getPost,
  createPost as createPostApi,
  uploadPost as uploadPostApi,
  uploadAll as uploadAllApi,
} from "../api";

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const res = await createPostApi(post);
  return res.data;
});

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const res = await getPost();
  return res.data;
});

export const uploadPost = createAsyncThunk(
  "posts/uploadPost",
  async (payload) => {
    console.log(payload);
    const res = await uploadPostApi(payload.post, payload.id);
    console.log(res.data);
    return res.data;
  }
);

// export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
//   const res = await deletePostApi(id);
//   return res.data;
// });

export const uploadAll = createAsyncThunk("posts/uploadAll", async (posts) => {
  const res = await uploadAllApi(posts);
  return res.data;
});
const postRedux = createSlice({
  name: "posts",
  initialState: {
    posts: [],
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
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(uploadPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(uploadAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(uploadAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPost } = postRedux.actions;
export default postRedux.reducer;
