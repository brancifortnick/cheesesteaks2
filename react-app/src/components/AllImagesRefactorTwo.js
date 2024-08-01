import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Card, CardContent, CardActions, ButtonGroup } from "@mui/material";
import DeleteLocationsImages from "./DeleteLocationsImages";
import AddComments from "./AddComments";
import Accordion from "./Accordion";
import "./AllImagesRefactorTwo.css";
import EditComment from "./EditComment";
import DeleteComment from './DeleteComment';

function AllImagesRefactorTwo({ images }) {
    const user = useSelector((state) => state.session.user);
    const location = useSelector((state) => state.location);

    const buildCommentTemplate = (image) => {
        if (image.comments && Array.isArray(image.comments)) {
            return image.comments.map((comment) => (
                <Box key={comment.id} sx={{ mb: 1 }}>
                    <Typography className="comment-body">{comment.comment}</Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <EditComment imageId={image.id} commentObj={comment} />
                        <DeleteComment imageId={image.id} commentId={comment.id} />
                    </ButtonGroup>
                </Box>
            ));
        }
    };

    const buildTemplate = () => {
        if (images) {
            return images.map((image) => (
                image !== null && location.id === image.location_id ? (
                    <Box key={image.id} className="image-card-container">
                        <Card className="image-card">
                            <CardContent>
                                <Typography className="image-title">{image.title}</Typography>
                                <img src={image.image} className="image-src" alt={image.title || '...loading'} />
                                <CardActions>
                                    {/* Optional: You can place action buttons here */}
                                </CardActions>
                            </CardContent>
                        </Card>
                        <DeleteLocationsImages imageId={image.id} />
                        <Box className="comment-module">
                            <Accordion
                                toggleText="View Comments"
                                children={buildCommentTemplate(image)}
                            />
                            <div className='add-comment-container'>
                                <AddComments imageId={image.id} locationId={location.id} />
                            </div>
                        </Box>
                    </Box>
                ) : null
            ));
        }
    };

    return (
        <Box className="images-grid">
            {buildTemplate()}
        </Box>
    );
}

export default AllImagesRefactorTwo;
