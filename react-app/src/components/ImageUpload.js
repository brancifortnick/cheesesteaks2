import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage} from '../store/image'

const ImageUpload = ({locationId}) => {


  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.session.user);


  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", image);
    formData.append('title', title);
    // formData.append('location_id', Number(locationId))
    // formData.append('user_id', user.id)
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
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input type="file" accept="image/*" onChange={addPictureFile} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;
