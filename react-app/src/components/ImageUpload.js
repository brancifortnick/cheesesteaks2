import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, getAPhoto, getPhotos } from '../store/image'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './ImageUpload.css'
import AllComments from "./AllComments";
import GetLocationsImages from "./GetLocationsImages";


const ImageUpload = () => {


  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.session.user);
  const { locationId } = useParams()
  // let userId = user.id

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [location_id, setLocation] = useState(locationId)
  const [user_id, setUser] = useState(Number(user.id))


  // location_id = Number(locationId)


  console.log(locationId, user.id, '>>>>from IMAGEUPLOAD FRONTEND')

  useEffect(() => {
    if (!user)
      return null
    else if (!location_id) {
      location_id = locationId
      setUser(user.id)
      setLocation(locationId)
    }
  }, [dispatch])


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append('title', title)
    formData.append('user_id', user_id);
    formData.append('location_id', locationId);
    dispatch(addImage(formData))

    history.push(`/location/${locationId}`); // change route to include :imageId
  };


  useEffect(() => {
    dispatch(getAPhoto(locationId))
  }, [dispatch, locationId])

  const addPictureFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      {/* <AllComments /> */}
      <section className='b'>
        <form className="form-container" onSubmit={onSubmit}>
          <div>
            <label style={{ color: "#1976d2" }} id='title'>WizWit or WitOut</label>
            <Box sx={{
              display: 'flex', flexDirection: 'column', alignContent: 'center', mt: .5,
              p: .5, width: 500,
              maxWidth: '100%',
            }}>
              <TextField
                fullWidth
                type="text"
                name="title"
                placeholder='Title your photo'
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
      </section>
    </div>
  );
};

export default ImageUpload;
