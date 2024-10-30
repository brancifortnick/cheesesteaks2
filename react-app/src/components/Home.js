import React from "react";
import { Container, Typography, Box } from "@mui/material";
import video from "../assets/steak_video.mp4";
import Footer from "./Footer";
import { PhotoPseudoAliasThree } from '../assets/happy-quote.jpg';
const Home = () => {
  return (
    <>
      <Container>
        <Box sx={ {
          color: 'black', backgroundColor: 'white'
        } } my={ 2 }>

          {/* <Typography variant="title" component="title" gutterBottom >
            Welcome to Steak Out
          </Typography> */}
        </Box >
        {/* Video Section */ }
        < Box sx={ {} } my={ 2 } >
          { /* controls removed so users can't pause video */ }
          <video width="100%" autoPlay loop muted src={ video } type="video/mp4">

          </video>
        </Box >

        <Box sx={ { fontSize: "1rem" } } my={ 4 }>
          <Typography variant="h4" component="h4" gutterBottom>
            Most people don't enjoy waiting for their meals. We understand.
            That's why we've made it easy to see which restaurants are currently
            the busiest. Avoid waiting for your meal and get back to enjoying your day with Steak Out.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="" flexWrap="wrap">
          <Box p={ 2 } bgcolor="white" m={ 1 } width="30%">
            <Typography variant="h6">Angelo's Pizza </Typography>
            <Typography variant="body1">
              South, Philadelphia - known for its top tier pizza and incredible cheesesteaks
            </Typography>
          </Box>
          <Box p={ 2 } bgcolor="white"  m={ 1 } width="30%">
            <Typography variant="h6">Daellsandro's Steaks</Typography>
            <Typography variant="body1">
              Thinly chopped and extra cheesey - a must try for any cheesesteak lover
            </Typography>
          </Box>
          <Box p={ 2 } bgcolor="white" m={ 1 } width="30%">
            <Typography variant="h6">Geno's</Typography>
            <Typography variant="body1">
              Rival's with Pat's King of Steaks - known for its bright lights  
            </Typography>
          </Box>
        </Box>

        {/* <Box mt={ 4 }>

        </Box> */}
      </Container >
    </>
  );
};

export default Home;
