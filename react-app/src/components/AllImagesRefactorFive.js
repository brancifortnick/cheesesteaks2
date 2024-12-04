//! THIS FILE CONTAINES AllImagesRefactor3.js before i removed location image from banner and started to refactor the comments section





import React from "react";
import { useSelector } from "react-redux";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    ButtonGroup,
    CardMedia,
    CardHeader,
} from "@mui/material";
import DeleteLocationsImages from "./DeleteLocationsImages";
import AddComments from "./AddComments";
import Accordion from "./Accordion";
// import "./AllImagesRefactorThree.css";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
import ImageList from "@mui/material/ImageList";

function AllImagesRefactorThree({ images }) {
    const user = useSelector((state) => state.session.user);
    const location = useSelector((state) => state.location);

    const buildCommentTemplate = (image) => {
        if (image.comments && Array.isArray(image.comments)) {
            return image.comments.map((comment) => (
                <div className="delete-comment-div">
                    <div className="comment-container" key={ comment.id }>
                        <Box key={ comment.id } my={ 4 } sx={ { display: 'flex', flexDirection: 'row', justifyContent: 'center' } }>
                            <Card>
                                <div
                                    className="comment-card-text"

                                >
                                    {/* <Box sx={{ display: 'flex', flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}> */ }
                                    <Typography variant="h2" component="h2" gutterBottom>
                                        { " " }
                                        { comment.comment }
                                    </Typography>
                                </div>
                                <div>
                                    { "Review By -" + " " + " " + `${comment.user.username}` }
                                </div>
                                <EditComment imageId={ image.id } commentObj={ comment } />
                                <DeleteComment imageId={ image.id } commentId={ comment.id } />
                            </Card>
                        </Box>
                    </div>
                </div>
            ));
        } else {
            console.log("no comments currently");
        }
    }
    const buildTemplate = () => {
        if (images) {
            return images.map((image) =>
                image !== null && location.id === image.location_id ? (
                    <Box key={ image.id } className="image-card-container">
                        <CardMedia
                            component="img"
                            height="400"
                            src={ image.image }
                            alt="images-image-src"

                        />
                        {
                            user.id === location.user_id ? (
                                <DeleteLocationsImages imageId={ image.id } />
                            ) : null
                        }

                    </Box>


                ) : null;
            )
};
    };


< CardContent >
    <Typography
        className="image-title"
        sx={ { fontWeight: "bold", fontSize: 22 } }
    >
        { image.title }
    </Typography>
    <Accordion
        toggleText="View Comments"
        children={ buildCommentTemplate(image) }
    />
    <AddComments imageId={ image.id } locationId={ location.id } />
</CardContent >





return
<Box className="images-grid">
    { buildTemplate() }
</Box>;

}

// export default AllImagesRefactorThree;