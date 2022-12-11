import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const CreatePosts = (newpost) => axios.post(url, newpost);

export const updateposts = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

export const deleteposts = (id) => axios.delete(`${url}/${id}`);

export const linkposts = (id) => axios.patch(`${url}/${id}/likepost`);
