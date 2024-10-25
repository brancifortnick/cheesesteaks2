import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// Adjust the import path as necessary

const Home = () => {
    return (
        <Container>
            {/* Welcome Text */}
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to the Home Page
                </Typography>
                <Typography variant="body1">
                    This is the home page of our application.
                </Typography>
            </Box>

            {/* Video Section */}
            <Box my={4}>
                <video width="100%" controls autoPlay>
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>

            {/* Random Things Showcase */}
            <Box my={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Random Things
                </Typography>
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
            </Box>

            {/* Footer */}
            <Box mt={4}>

            </Box>
        </Container>
    );
};

export default Home;