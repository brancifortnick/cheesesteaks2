import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import video from '../assets/steak_video.mp4';
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <Container>

                <Box my={4}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to the Home Page
                    </Typography>

                </Box>

                {/* Video Section */}
                <Box my={4}>
                    <video width="100%" autoPlay loop muted controls >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                <Box sx={{ fontSize: '1rem' }} my={4}>
                    <Typography variant="h4" component="h4" gutterBottom>
                        Most people don't enjoy waiting for their meals. We understand. That's why we've made it easy to see which restaurants are currently the busiest. This might save you a trip you didn't have time for.
                        We also want to emphasize that this isn't meant to disadvantage business owners. Each restaurant is randomly selected and rotated every 30 minutes to ensure fairness and maintain ethical business practices.
                        Please read our Terms and Conditions for a detailed explanation, examples, and more information.
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                    <Box p={2} bgcolor="lightgrey" m={1} width="30%">
                        <Typography variant="h6">Random Thing 1</Typography>
                        <Typography variant="body1">Description of random thing 1.</Typography>
                    </Box>
                    <Box p={2} bgcolor="lightgrey" m={1} width="30%">
                        <Typography variant="h6">Random Thing 2</Typography>
                        <Typography variant="body1">Description of random thing 2.</Typography>
                    </Box>
                    <Box p={2} bgcolor="lightgrey" m={1} width="30%">
                        <Typography variant="h6">Random Thing 3</Typography>
                        <Typography variant="body1">Description of random thing 3.</Typography>
                    </Box>
                </Box>



                <Box mt={4}>
                    <Footer>
                    </Footer>
                </Box>


            </Container>
        </>
    );
};

export default Home;