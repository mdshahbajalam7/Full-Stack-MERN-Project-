import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({ setcurrentId }) {
  const classes = useStyles();
  const {posts,isloading} = useSelector((state) => state.posts);
  console.log(posts);
  if(!posts.length && !isloading){
    return 'No posts'

  }
  return isloading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((posts) => (
        <Grid key={posts._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={posts} setcurrentId={setcurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
