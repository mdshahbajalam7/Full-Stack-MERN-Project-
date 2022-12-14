import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// const url = "http://localhost:5000/posts";

export const fetchPosts = () => API.get(`/posts`);

export const CreatePosts = (newpost) => API.post(`/posts`, newpost);

export const updateposts = (id, updatePost) =>
  API.patch(`/posts/${id}`, updatePost);

export const deleteposts = (id) => API.delete(`/posts/${id}`);

export const linkposts = (id) => API.patch(`/posts/${id}/likepost`);

export const SignIn = (formData) => API.post(`/user/signin`, formData);
export const SignUp = (formData) => API.post(`/user/signup`, formData);
