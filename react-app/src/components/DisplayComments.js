import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AllComments from './AllComments';



const DisplayComments = ({ imageId }) => {



    return (
        <div>
            <AllComments imageId={imageId} />
        </div>
    )



};
export default DisplayComments;