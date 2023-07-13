import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userRedux from "./userRedux";
import postRedux from "./postRedux";
import commentsRedux from "./commentsRedux";
export default configureStore({
  reducer: { userRedux, postRedux, commentsRedux },
});
