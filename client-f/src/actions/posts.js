import * as api from "../api";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  UPDATE,
} from "../constants/actionType";

//  Action Creators
export const getpost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// search query

export const getpostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// POST HERE DATA IN SERVER
export const CreatePost = (psot) => async (dispatch) => {
  try {
    const { data } = await api.CreatePosts(psot);
    dispatch({ type: CREATE, payload: data });
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
