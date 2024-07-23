import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPhoto } from "../store/image";
import DisplayComments from "./DisplayComments";
import GetSingleComment from "./GetSingleComment";
import { getOneLocation } from "../store/location";
import { getTheComments } from "../store/comment";
const GetSpecificImage = () => {
    const images = useSelector(state => Object.values(state.image))
    const users = useSelector((state) => Object.values(state.users));
    const dispatch = useDispatch();
    const userId = useParams();
    let obj = {}
    let


})
}


export default GetSpecificImage;
