import Container from "@mui/material/Container";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";
// import {witch} from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom'

// const memories =
//   "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI";

function App() {
  // const user = JSON.parse(localStorage.getItem(""))
  return (
    <Container maxWidth="xl">
      <Navbar />
      {/* <Switch> */}
      <Routes>
        {/* <Route path="/" exact element={() => <Navigate to="/posts" replace/>} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
      {/* </Switch> */}
    </Container>
  );
}

export default App;
