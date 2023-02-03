import * as api from "../api";
import {
  COMMENT,
  CREATE,
  DELETE,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_POST,
  LIKE,
  START_LOADING,
  UPDATE,
} from "../constants/actionType";

//  Action Creators
export const getpost = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getposts = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    // console.log(data);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// search query

export const getpostBySearch = (searchQuery) => async (dispatch) => {
  console.log("searchQuery", searchQuery);
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
// comment
export const commentPost = (value, id) => async (dispatch) => {
  try {
     const {data} =  await api.commnetposts(value, id);
     console.log(data);
     dispatch({ type: COMMENT, payload: data });
     return data.comments;
    //  console.log(data.comments);
  } catch (error) {
    console.log(error.message);
  }
};
// POST HERE DATA IN SERVER
export const CreatePost = (psot, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.CreatePosts(psot);
    navigate(`/posts/${data._id}`);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// UPDATE HERE DATA IN SERVER

export const updateposts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateposts(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE HERE DATA IN SERVER

export const deletepost = (id) => async (dispatch) => {
  try {
    await api.deleteposts(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// LIKE HERE DATA IN SERVER

export const likepost = (id) => async (dispatch) => {
  try {
    const { data } = await api.linkposts(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
