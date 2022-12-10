import { AppBar, Grid, Grow, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
const memories =
  "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI";

function App() {
  const classes = useStyles();
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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
