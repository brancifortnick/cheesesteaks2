import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {

    const location = useState(state => state.location)


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={location.profile_img}
                alt="establishment"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    title goes here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    secondary text goes here
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"></Button>
                <Button size="small"></Button>
            </CardActions>
        </Card>
    );
}