import {
  AppBar,
  Button,
  Container,
  Grid,
  Grow,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getpost, getpostBySearch } from "../../actions/posts";
import Form from "../Form/Form";
import Paginations from "../Pagination/Paginations";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [currentId, setcurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const [search, setsearch] = useState("");
  const [tags, settags] = useState([]);
  const searchQuery = query.get("searchQuery");

  // useEffect(() => {
  //   dispatch(getpost());
  // }, [currentId, dispatch]);

  const SerachPost = () => {
    if (search.trim() || tags) {
      // dispatch -> fetch search post
      dispatch(getpostBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // serach post
      SerachPost();
    }
  };
  const handleAdd = (tag) => settags([...tags, tag]);
  const handleDelete = (tagToDelete) => {
    settags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridcontainer}
          container
          // direction="column-reverse"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.AppBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={SerachPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
            {/* {(!searchQuery && !tags.length) && ( */}
            <Paper elevation={6} className={classes.pagination}>
              <Paginations page={page} />
            </Paper>
            {/* // )} */}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
