import React from "react";
import { Container, Typography, Box } from "@mui/material";
import video from "../assets/steak_video.mp4";
import Footer from "./Footer";
import { PhotoPseudoAliasThree } from '../assets/happy-quote.jpg';
import { useSelector } from 'react-redux';
const Home = () => {

  const location = useSelector((state) => state.location);
  console.log(location)
  const videoStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <>
      <div className='home-outter-container'>
      <Container>
        <Box sx={ {
          color: 'black', backgroundColor: 'white'
        } } my={ 2 }>

        </Box >

        <Box sx={ { display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: "24px" } } my={ 4 }>
          <Typography variant="h3" component="h3" gutterBottom>
            Our Top Three Favorite Spots
          </Typography>
        </Box>
        <Box display="flex" justifyContent="" flexWrap="nowrap">
          <Box p={ 2 } bgcolor="white" m={ 1 } width="30%">
            <Typography variant="h4">Angelo's Pizza </Typography>
            <Typography variant="h6" >
              South, Philadelphia - known for its top tier pizza and incredible cheesesteaks
            </Typography>
          </Box>
          <Box p={ 2 } bgcolor="white"  m={ 1 } width="30%">
            <Typography variant="h4">Daellsandro's Steaks</Typography>
            <Typography variant="h6">
              A slight drive outside of Philadelphia- a must try for any cheesesteak enthusiast
            </Typography>
          </Box>
          <Box p={ 2 } bgcolor="white" m={ 1 } width="30%">
            <Typography variant="h4">Lillo's</Typography>
            <Typography variant="h6">
              A hidden gem located in southern New Jersey with outstanding pizza and steaks
            </Typography>
          </Box>
        </Box>

        {/* <Box mt={ 4 }>

        </Box> */}
        </Container >
        </div>
    </>
  );
};

export default Home;
