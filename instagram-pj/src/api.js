import axios from "axios";

const BASE_URL = "http://localhost:6001";

//user

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const getUser = (id) => axios.get(`${BASE_URL}/users/${id}`);

export const createUser = (user) => {
  return axios.post(`${BASE_URL}/users`, user);
};

export const updateUser = (id, user) => {
  return axios.put(`${BASE_URL}/users/${id}`, user);
};

export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);

//post
export const getPost = () => axios.get(`${BASE_URL}/posts`);

export const createPost = (post) => axios.post(`${BASE_URL}/posts`, post);
// export const deletePost = (id) => axios.delete(`${BASE_URL}/posts/${id}`);

export const uploadPost = (post, id) =>
  axios.put(`${BASE_URL}/posts/${id}`, post);

export const uploadAll = (id, post) => {
  return axios.put(`${BASE_URL}/posts/${id}`, post);
};

//comment
export const getComments = () => axios.get(`${BASE_URL}/comments`);
export const createComment = (comment) =>
  axios.post(`${BASE_URL}/comments`, comment);
