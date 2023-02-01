// import { STATES } from "mongoose";
import {
  CREATE,
  DELETE,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  START_LOADING,
  UPDATE,
} from "../constants/actionType";

export default (state = [], action) => {
  switch (action.type) {
    case START_LOADING:
      return {};
    case END_LOADING:
      return {};
    // GET
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberofpages: action.payload.numberofpages,
      };

    // GET DATABY SEARCH
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };

    // CREATE
    case CREATE:
      return [...state, action.payload];
    // UPDATE
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // LIKE
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // DELETE
    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
