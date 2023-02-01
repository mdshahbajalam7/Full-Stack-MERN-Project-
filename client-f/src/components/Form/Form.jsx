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
    // creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (posts) setpostsData(posts);
  }, [posts]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(CreatePost({ ...postsData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updateposts(currentId,{ ...postsData, name: user?.result?.name }));
      clear();
    }
  };

  if(!user?.result?.name){
    return(
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In Create Your own Memorise and Like's Other memorise.!
        </Typography>

      </Paper>
    )
  }
  const clear = () => {
    setcurrentId(0);
    setpostsData({
      // creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper} raised elevation={6}>
      <form
        autoComplete="of"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handlesubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Curd Operation{" "}
        </Typography>
        {/* <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postsData.creator}
          onChange={(e) =>
            setpostsData({ ...postsData, creator: e.target.value })
          }
        /> */}
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
          onChange={(e) =>
            setpostsData({ ...postsData, tags: e.target.value.split(",") })
          }
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
