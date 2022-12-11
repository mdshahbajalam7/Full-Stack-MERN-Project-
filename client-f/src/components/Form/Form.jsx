import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, updateposts } from "../../actions/posts";
import { useEffect } from "react";

// GET THE CURRENT ID

function Form({ currentId, setcurrentId }) {
  console.log(currentId);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postsData, setpostsData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const posts = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(()=>{
    if(posts) setpostsData(posts)
  },[posts])
 
  const handlesubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateposts(currentId, postsData));
    } else {
      dispatch(CreatePost(postsData));
    }
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="of"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handlesubmit}
      >
        <Typography variant="h6">Creating a Curd</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postsData.creator}
          onChange={(e) =>
            setpostsData({ ...postsData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postsData.title}
          onChange={(e) =>
            setpostsData({ ...postsData, title: e.target.value })
          }
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postsData.message}
          onChange={(e) =>
            setpostsData({ ...postsData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          value={postsData.tags}
          onChange={(e) => setpostsData({ ...postsData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setpostsData({ ...postsData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="Primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          // className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
