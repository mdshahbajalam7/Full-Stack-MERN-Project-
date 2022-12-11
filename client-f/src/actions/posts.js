import * as api from "../api";

//  Action Creators
export const getpost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
  //   const action = { type: "FETCH_ALL", payload: [] };
};

export const CreatePost = (psot) => async (dispatch) => {
  try {
    const { data } = await api.CreatePosts(psot);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateposts = (id,post)=>async(dispatch)=>{
  try {
    
    const {data} = await api.updateposts(id,post)
    dispatch({type:"UPDATE",payload:data})
  } catch (error) {
    console.log(error.message);
  }
}
