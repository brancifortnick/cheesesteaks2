import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, getPhotos} from '../store/image'

const ImageUpload = () => {


  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.session.user);
  const params = useParams()
  const {locationId} = params;
  console.log(locationId, user.id, '>>>>>from IMAGEUPLOAD frontend')
  let userId = user.id

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [location_id, setLocation] = useState(locationId)
  const [user_id, setUser] = useState(userId)

  console.log(locationId, userId, '>>>>from IMAGEUPLOAD FRONTEND')

useEffect(()=> {
  setLocation(locationId)
  setUser(userId)
},[])


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append('title', title)
    formData.append('user_id', user.id);
    formData.append('location_id', locationId);
    // const getData = await fetch(`/api/images/new-image`, {
    //   method: "POST",
    //   body: formData,
    //  })
    //  if(getData.ok){
    //    let image = await getData.json()
       dispatch(addImage(formData))
      //  dispatch(getPhotos())
      
      history.push(`/`);
  };


  const addPictureFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <form className="form-container" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input type="file" accept="image/*" name='image' onChange={addPictureFile} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;
