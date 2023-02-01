import { CREATE, DELETE, FETCH_ALL, FETCH_BY_SEARCH, LIKE, UPDATE } from "../constants/actionType";

export default (posts = [], action) => {
  switch (action.type) {
    // GET
    case FETCH_ALL:
      return action.payload;

    // GET DATABY SEARCH
    case FETCH_BY_SEARCH:
      return action.payload
    
    // CREATE
    case CREATE:
      return [...posts, action.payload];
    // UPDATE
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // LIKE
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // DELETE
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
