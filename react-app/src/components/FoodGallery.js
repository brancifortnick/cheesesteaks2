import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Accordion from './Accordion';

export const useStyles = styled((theme) => ({
    card: {
        maxWidth: 345,
        margin: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    media: {
        height: 300,
        width: '100%',
        objectFit: 'cover',
    },
    bio: {
        fontWeight: '400',
        color: '#555',
        marginTop: '10px',
    },
    timestamp: {
        color: '#aaa',
        fontSize: '0.8rem',
        marginTop: '10px',
        fontStyle: 'italic',
    },
}));

const foodData = [
    {
        id: 1,
        imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
        bio: 'Delicious Cheeseburger',
        updatedAt: new Date('1992-06-04'),
    },
    // Add more food items here
];

export const FoodPictureCard = ({ imageUrl, bio, updatedAt }) => {
    const classes = useStyles();
    const formattedDate = updatedAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                className={classes.media}
                image={imageUrl}
                alt={bio}
            />
            <CardContent>
                <Typography variant="body1" className={classes.bio}>
                    {bio}
                </Typography>
                <Typography variant="body2" className={classes.timestamp}>
                    Updated: {formattedDate}
                </Typography>
                <Accordion />
            </CardContent>
        </Card>
    );
};

const FoodGallery = () => {
    return (
        <Container>
            <Grid container spacing={3} justifyContent="center">
                {foodData.map((food) => (
                    <Grid item xs={12} sm={6} md={4} key={food.id}>
                        <FoodPictureCard
                            imageUrl={food.imageUrl}
                            bio={food.bio}
                            updatedAt={food.updatedAt}
                        />
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
};

export default FoodGallery;
