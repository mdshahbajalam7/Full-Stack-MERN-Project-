import { Container, Grid, Grow, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getpost } from "../../actions/posts";
import Form from "../Form/Form";
import Paginations from "../Pagination/Paginations";
import Posts from "../Posts/Posts";
// import useStyles from "./styles";
function Home() {
  const [currentId, setcurrentId] = useState(null);
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpost());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          // direction="column-reverse"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
            <Paper elevation={6}>
              <Paginations/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
