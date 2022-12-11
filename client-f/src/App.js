import { AppBar, Grid, Grow, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getpost } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
const memories =
  "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI";

function App() {
  const [currentId,setcurrentId]=useState(null)
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getpost())
  },[dispatch])
  return (
    <Container maxWidth="lg">
      {/* h1jsfdakjfkasjdk */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Curd Operation
        </Typography>
        {/* <img
          className={classes.image}
          src={memories}
          alt="curd"
          height="60"
          // width="150"
          // align="center"
        /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setcurrentId={setcurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
