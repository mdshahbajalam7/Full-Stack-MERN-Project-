import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({setcurrentId}) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((posts) => (
        <Grid key={posts._id} item xs={12} sm={6}>
          <Post {...posts} setcurrentId={setcurrentId}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
