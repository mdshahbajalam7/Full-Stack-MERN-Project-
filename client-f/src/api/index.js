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
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const fetchPostsBySearch = (searchQuery) =>{
  console.log(searchQuery);
  let getUrl = "/posts/search?searchQuery="

  if(searchQuery.search!=""){
    getUrl+=`${searchQuery.search}`
  }

  if(searchQuery.tags!=""){
    if(searchQuery.search!=""){
      getUrl+=`&`
    }
    getUrl+=`tags=${searchQuery.tags}`
  }

  return API.get(getUrl)
}

export const CreatePosts = (newpost) => API.post(`/posts`, newpost);

export const updateposts = (id, updatePost) =>
  API.patch(`/posts/${id}`, updatePost);

export const deleteposts = (id) => API.delete(`/posts/${id}`);

export const linkposts = (id) => API.patch(`/posts/${id}/likepost`);

export const SignIn = (formData) => API.post(`/user/signin`, formData);
export const SignUp = (formData) => API.post(`/user/signup`, formData);
