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

// posts get post
export const fetchPost = (id) => API.get(`/posts/${id}`);

// Pagenation
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

// search
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
// {
// console.log(searchQuery);
// let getUrl = "/posts/search?searchQuery=";

// if (searchQuery.search != "") {
//   getUrl += `${searchQuery.search}`;
// }

// if (searchQuery.tags != "") {
//   if (searchQuery.search != "") {
//     getUrl += `&`;
//   }
//   getUrl += `tags=${searchQuery.tags}`;
// }

// return API.get(getUrl);

// };

// create posts

export const CreatePosts = (newpost) => API.post(`/posts`, newpost);

// update posts
export const updateposts = (id, updatePost) =>
  API.patch(`/posts/${id}`, updatePost);

// delete posts
export const deleteposts = (id) => API.delete(`/posts/${id}`);

// like posts
export const linkposts = (id) => API.patch(`/posts/${id}/likepost`);

// comment posts
export const commnetposts = (value, id) =>
  API.post(`/posts/${id}/commnetpost`, { value });

// sign
export const SignIn = (formData) => API.post(`/user/signin`, formData);
// sign out
export const SignUp = (formData) => API.post(`/user/signup`, formData);
