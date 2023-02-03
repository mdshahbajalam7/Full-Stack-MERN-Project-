import { Button, TextField, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import useStlyes from "./styles";
function Commentsection({ post }) {
  const [comments, setCommments] = useState(post?.comments);
  const [comment, setCommment] = useState("");
  const CommnetsRef = useRef();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStlyes();
  const commnentButton = async () => {
    // console.log(comment);
    const finalComment = `${user.result.name}:${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setCommments(newComments);
    setCommment("");
    CommnetsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={classes.commentOuterContainer}>
        <div className={classes.commentInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
               <strong>{c.split(': ')[0]}</strong>
               {/* {c.split(':')[1]} */}
            </Typography>
          ))}
          <div ref={CommnetsRef} />
        </div>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>

            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              value={comment}
              multiline
              onChange={(e) => setCommment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              onClick={commnentButton}
              color="primary"
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Commentsection;
