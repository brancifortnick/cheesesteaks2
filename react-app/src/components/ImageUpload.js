import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, getAPhoto, getPhotos, postNewPhoto } from '../store/image'

const ImageUpload = ({ locationId }) => {


  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector((state) => state.session.user?.id);
  // const params = useParams()
  // const { locationId } = useParams()
  const user = useSelector(state => state.session.user)

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);



  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   //fetching from backend route
  //   const res = await fetch("/api/images/new-image", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (res.ok) {
  //     let image = await res.json();
  //     dispatch(addImage(image, title, userId, Number(locationId)))
  //     dispatch(postNewPhoto(formData))
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append('title', title)
    formData.append('user_id', user.id);
    formData.append('location_id', locationId);
    dispatch(addImage(formData))
    dispatch(getPhotos(Number(locationId)))
    history.push(`/locations/${locationId}`);
  };

  useEffect(() => {
    dispatch(getPhotos())

  }, [dispatch, locationId])

  const addPictureFile = async (e) => {
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
