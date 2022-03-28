import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, getPhotos } from '../store/image'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Label } from "@mui/icons-material";
import './ImageUpload.css'
const ImageUpload = () => {


  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.session.user);
  const params = useParams()
  const { locationId } = params;
  console.log(locationId, user.id, '>>>>>from IMAGEUPLOAD frontend')
  let userId = user.id

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [location_id, setLocation] = useState(locationId)
  const [user_id, setUser] = useState(userId)

  // location_id = Number(locationId)

  console.log(locationId, userId, '>>>>from IMAGEUPLOAD FRONTEND')

  useEffect(() => {
    setLocation(location_id)
    setUser(user_id)
  }, [])


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append('title', title)
    formData.append('user_id', user.id);
    formData.append('location_id', locationId);
    dispatch(addImage(formData))
    history.push(`/locations/${locationId}`);
  };


  const addPictureFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <form className="form-container" onSubmit={onSubmit}>
        <div>
          <label id='title'>Title</label>
          <Box sx={{
            display: 'flex', flexDirection: 'column', alignContent: 'center', mt: .5,
            p: .5
          }}>
            <input
              type="text"
              name="title"
              placeholder='add title..'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5, p: 1 }}>

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5, pt: 1 }}>

            <input type="file" accept="image/*" name='image' onChange={addPictureFile} />
            <Button variant='contained' color='primary' type='submit'>Submit</Button>
          </Box>
        </div>
      </form >
    </>
  );
};

export default ImageUpload;
