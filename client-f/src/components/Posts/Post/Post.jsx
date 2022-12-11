import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import useStyles from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletepost, likepost } from "../../../actions/posts";

function Post({
  _id,
  selectedFile,
  title,
  creator,
  createdAt,
  tags,
  message,
  linkCount,
  setcurrentId,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setcurrentId(_id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textScondary" component="p" >
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likepost(_id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Link &nbsp;
          {linkCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletepost(_id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
