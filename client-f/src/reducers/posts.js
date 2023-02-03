// import { STATES } from "mongoose";
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

export default (state = { isloading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isloading: true };
    case END_LOADING:
      return { ...state, iserror: false };
    // GET
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberofpages: action.payload.numberofpages,
        isloading: false,
        iserror: false,
      };

    // GET DATABY SEARCH
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
        isloading: false,
        iserror: false,
      };

    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
        isloading: false,
        iserror: false,
      };

    // CREATE
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    // UPDATE
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    // LIKE
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    // DELETE

    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          // change the post just received a comment........
          if (post._id === action.payload._id) {
            return action.payload;
          }
          // return all the posts normally.....
          return post;
        }),
      };

    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return state;
  }
};
