import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditComment from "./EditComment";
import DeleteComment from './DeleteComment';
import Accordion from './Accordion';
import AddComments from './AddComments';

export const useStyles = styled((theme) => ({
    card: {
        maxWidth: 300,
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

const AllImagesRefactorFour = () => {
    const classes = useStyles();

    const user = useSelector((state) => state.session.user);
    const location = useSelector((state) => state.location);
    const images = Object.values(location.images);
    const buildCommentTemplate = (image) => {
        if (image.comments && Array.isArray(image.comments)) {
            return image.comments.map((comment) => (
                <div className='delete-comment-div' key={comment.id}>
                    <div className='comment-container'>
                        <CardContent>
                            <Typography variant="body1" className={classes.bio}>
                                {comment.comment}
                                {comment.updated_at.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Typography>
                            <Typography variant="body2" className={classes.timestamp}>
                                {comment.timestamp}
                            </Typography>
                            <EditComment commentObj={comment} imageId={image.id} />
                            <DeleteComment imageId={image.id} commentId={comment.id} />
                        </CardContent>
                    </div>
                </div>
            ));
        }
        return null;
    };
    let newImages = [...images]
    if (images || newImages) {
        const buildTemplate = () => {
            return (
                <Container>
                    <Grid container spacing={3} justifyContent="center">


                        {newImages.map((image) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={image.image}
                                        alt={image.title}
                                    />
                                    <Accordion children={buildCommentTemplate(image)} />
                                    <AddComments imageId={image.id} locationId={location.id} />
                                </Card>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            );
        };

        return (
            <div key='template-build'>
                {buildTemplate()}
            </div>
        );
    };
}
export default AllImagesRefactorFour;