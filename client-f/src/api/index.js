import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const CreatePosts = (newpost) => axios.post(url,newpost);

export const updateposts =(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost)